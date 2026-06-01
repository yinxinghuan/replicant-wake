// Replicant Wake i18n — zh / en. Voice + decorative titles English per series rule.
type Locale = 'zh' | 'en';
const STORAGE_KEY = 'rw_locale';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  try {
    const override = window.localStorage.getItem(STORAGE_KEY);
    if (override === 'zh' || override === 'en') return override;
  } catch {}
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en') || 'en';
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

const LOCALE: Locale = detectLocale();

const STRINGS: Record<Locale, Record<string, string>> = {
  en: {
    'hint.firstTap': 'tap the holograms · rehearse her',
    'btn.onceMore': 'reactivate',
    'hotspot.compact': 'compact mirror',
    'hotspot.earring': 'pearl earring',
    'hotspot.serum': 'lip serum',
    'hotspot.holder': 'cigarette holder',
    'hotspot.hologram': 'the original',
    'hotspot.showtime': 'wake her',
    'sub.compact': 'Run smile, set 7.',
    'sub.earring': 'Mother gave me these.',
    'sub.serum': 'He likes this color.',
    'sub.holder': 'Old habits. Not mine.',
    'sub.hologram': "She's the original.",
  },
  zh: {
    'hint.firstTap': '点全息影像 · 让她排练',
    'btn.onceMore': '重新激活',
    'hotspot.compact': '化妆镜',
    'hotspot.earring': '珍珠耳坠',
    'hotspot.serum': '唇精华',
    'hotspot.holder': '烟嘴',
    'hotspot.hologram': '原型',
    'hotspot.showtime': '唤醒她',
    'sub.compact': '微笑, 第 7 组。',
    'sub.earring': '母亲给我的。',
    'sub.serum': '他喜欢这个颜色。',
    'sub.holder': '老习惯。不是我的。',
    'sub.hologram': '她才是原本的人。',
  },
};

export function t(key: string): string {
  return STRINGS[LOCALE]?.[key] ?? STRINGS.en[key] ?? key;
}
export function getLocale(): Locale { return LOCALE; }
