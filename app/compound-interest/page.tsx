import type { Metadata } from "next";
import { CompoundInterestCalculator } from "./compound-interest-calculator";

export const metadata: Metadata = {
  title: "Compound Interest Calculator",
  description:
    "Estimate future balance, total contributions, and interest earned with a monthly compound interest calculator."
};

export default function CompoundInterestPage() {
  return <CompoundInterestCalculator />;
}
