import { TextArea } from "components";
export default {
  title: "my_nft_marketplace/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder8",
  variant: "OutlineGray400",
  size: "sm",
  placeholder: "placeholder",
};
