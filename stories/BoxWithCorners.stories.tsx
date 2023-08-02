import { BoxWithCorners } from "../components/common";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BoxWithCorners> = {
  component: BoxWithCorners,
};

export default meta;

type Story = StoryObj<typeof BoxWithCorners>;

export const WithBorder: Story = {
  render: () => <BoxWithCorners intent={"withBorder"}>Hello</BoxWithCorners>,
};
