export const MAX_WORDS = 80;

export function countWords(text: string): number {
	return text.trim().split(/\s+/).filter(Boolean).length;
}
