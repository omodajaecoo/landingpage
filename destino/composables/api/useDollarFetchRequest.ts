export default function () {
  const { public: { apiURL } } = useRuntimeConfig();
  function customFetch(url: string, options: any = {}) {
    const fullUrl = `${apiURL}${url}`;
    return $fetch(fullUrl, {
      onRequest({ options }) {
        options.headers = {
          ...options.headers,
          'Content-Type': 'application/json'
        };
      },
      onRequestError({ error }) {
        console.error('请求错误:', error);
      },
      onResponseError({ response }) {
        console.error('响应错误:', response);
        return navigateTo('/error');
      },
      ...options,
    });
  }

  return customFetch;
}
