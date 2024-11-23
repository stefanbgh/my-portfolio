import { PerLine } from "../../typescript/types/PerLine";

export const checkScreenWidth = (screenWidth: number): PerLine => {
	if (screenWidth >= 1024) return 16;
	if (screenWidth >= 768) return 8;
	if (screenWidth >= 400) return 4;

	return 2;
};
