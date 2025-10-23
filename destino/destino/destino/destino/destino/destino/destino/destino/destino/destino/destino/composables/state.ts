import { useState } from "nuxt/app";

export const showCookies = () => useState<boolean>("showCookies", () => false);
