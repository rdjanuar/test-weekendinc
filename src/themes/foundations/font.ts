import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

export const fonts = {
  body: workSans.style.fontFamily,
};
