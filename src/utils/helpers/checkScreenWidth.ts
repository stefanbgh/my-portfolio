import { PerLine } from "../../typescript/types/PerLine";

export const checkScreenWidth = (screenWidth: number): PerLine => {
	if (screenWidth >= 1200) return 18;
	if (screenWidth >= 768) return 9;
	if (screenWidth >= 500) return 6;

	return 3;
};
