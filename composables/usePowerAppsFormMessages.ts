interface UsePowerAppsFormMessagesOptions {
  allowedOrigins?: string[];
  allowedPaymentHosts?: string[];
  enableRedirect?: boolean;
  enableResize?: boolean;
  enablePaymentRedirect?: boolean;
  getThankYouPath?: (path: string) => string;
}

const DEFAULT_POWER_APPS_ORIGINS = ['https://ayas-formweb-prd.powerappsportals.com'];
const DEFAULT_PAYMENT_HOSTS = ['checkout.ayasa.ec', 'checkout.omodajaecoo.ec'];

function parseMessageData(data: unknown): Record<string, unknown> | null {
  if (!data) return null;

  if (typeof data === 'string') {
    try {
      const parsed = JSON.parse(data);
      return parsed && typeof parsed === 'object' && !Array.isArray(parsed)
        ? parsed as Record<string, unknown>
        : null;
    } catch {
      return null;
    }
  }

  return typeof data === 'object' && !Array.isArray(data)
    ? data as Record<string, unknown>
    : null;
}

function getEmbeddedIframe(source: MessageEventSource | null): HTMLIFrameElement | null {
  const iframes = Array.from(document.querySelectorAll<HTMLIFrameElement>('iframe[data-powerapps-form="true"]'));
  return iframes.find((iframe) => iframe.contentWindow === source) || iframes[0] || null;
}

function submitPaymentRedirect(url: string, fields: unknown, allowedHosts: string[]): void {
  if (!fields || typeof fields !== 'object' || Array.isArray(fields)) return;

  let targetUrl: URL;
  try {
    targetUrl = new URL(url);
  } catch {
    return;
  }

  if (!allowedHosts.includes(targetUrl.hostname)) return;

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = targetUrl.href;
  form.acceptCharset = 'UTF-8';
  form.style.display = 'none';

  Object.entries(fields as Record<string, unknown>).forEach(([name, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value == null ? '' : String(value);
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
}

export function usePowerAppsFormMessages(options: UsePowerAppsFormMessagesOptions = {}) {
  const router = useRouter();
  const route = useRoute();
  const allowedOrigins = options.allowedOrigins || DEFAULT_POWER_APPS_ORIGINS;
  const allowedPaymentHosts = options.allowedPaymentHosts || DEFAULT_PAYMENT_HOSTS;
  const enableRedirect = options.enableRedirect ?? true;
  const enableResize = options.enableResize ?? true;
  const enablePaymentRedirect = options.enablePaymentRedirect ?? false;
  const getThankYouPath = options.getThankYouPath || ((path: string) => path.startsWith('/LP') ? '/LP/thank-you' : '/thank-you');

  const handleMessage = (event: MessageEvent) => {
    if (!allowedOrigins.includes(event.origin)) return;

    const data = parseMessageData(event.data);
    if (!data || typeof data.type !== 'string') return;

    if (enableResize && data.type === 'resize') {
      const height = Number(data.height);
      const iframe = Number.isFinite(height) && height > 0 ? getEmbeddedIframe(event.source) : null;
      if (iframe) iframe.style.height = `${height}px`;
      return;
    }

    if (enableRedirect && data.type === 'redirect' && typeof data.url === 'string' && data.url) {
      sessionStorage.setItem('tyAccess', Date.now().toString());
      router.push({
        path: getThankYouPath(route.path),
        query: {
          source: route.path.replace(/^\//, '')
        }
      });
      return;
    }

    if (enablePaymentRedirect && data.type === 'payment_redirect' && typeof data.url === 'string') {
      submitPaymentRedirect(data.url, data.fields, allowedPaymentHosts);
    }
  };

  onMounted(() => {
    window.addEventListener('message', handleMessage, false);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('message', handleMessage, false);
  });

  return {
    handleMessage
  };
}

export default usePowerAppsFormMessages;
