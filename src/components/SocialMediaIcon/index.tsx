import * as S from './SocialMediaIcon.module';
import { LinkedinLogo, WhatsappLogo, GithubLogo, InstagramLogo } from 'phosphor-react';

interface Props {
  type: 'linkedin' | 'whatsapp' | 'instagram' | 'github';
}

const SocialMediaIcon = ({ type }: Props) => {
  return (
    <S.WrapperIcon>
      {type === 'github' && <GithubLogo size={24} weight="bold" color="rgb(117 12 189)" />}
      {type === 'linkedin' && <LinkedinLogo size={24} weight="bold" color="rgb(117 12 189)" />}
      {type === 'whatsapp' && <WhatsappLogo size={24} weight="bold" color="rgb(117 12 189)" />}
      {type === 'instagram' && <InstagramLogo size={24} weight="bold" color="rgb(117 12 189)" />}
    </S.WrapperIcon>
  );
};

export default SocialMediaIcon;
