
export const ImageStore = {
  async get(key: string): Promise<string | null> {
    return localStorage.getItem(`art_${key}`);
  },
  async set(key: string, data: string): Promise<void> {
    try {
      localStorage.setItem(`art_${key}`, data);
    } catch (e) {
      console.warn("Storage full, clearing old arts...");
      // Simple LRU-ish: clear all and set new one (could be better)
      Object.keys(localStorage).forEach(k => {
        if (k.startsWith('art_')) localStorage.removeItem(k);
      });
      localStorage.setItem(`art_${key}`, data);
    }
  },
  async remove(key: string): Promise<void> {
    localStorage.removeItem(`art_${key}`);
  }
};
