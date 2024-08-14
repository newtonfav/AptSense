import { Jomhuria } from "next/font/google";
const jomhuria = Jomhuria({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return <div>Hello World</div>;
}
