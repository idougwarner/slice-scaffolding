import Button from '@/components/core/Button';

export interface ISliceProps {
  token?: string;
  onNftCreation: () => void;
}

const CreateNft = ({ token }: ISliceProps) => {
  return (
    <>
      User Token {token}
      <Button>Create NFT</Button>
    </>
  );
};

export default CreateNft;
