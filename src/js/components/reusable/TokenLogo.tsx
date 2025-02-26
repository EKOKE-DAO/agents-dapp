import DeferredLogo from '../../../assets/images/token/deferred.webp';
import EkokeLogo from '../../../assets/images/token/ekoke.webp';
import EkokeDAOLogo from '../../../assets/images/token/ekoke-dao.webp';

export enum Token {
  Deferred = 'Deferred',
  Ekoke = 'Ekoke',
  EkoGOV = 'EkoGOV',
}

interface Props {
  token: Token;
  className?: string;
  height: number;
  width: number;
}

const TokenLogo = ({ token, className, height, width }: Props) => {
  const logos = {
    [Token.Deferred]: DeferredLogo,
    [Token.Ekoke]: EkokeLogo,
    [Token.EkoGOV]: EkokeDAOLogo,
  };

  return (
    <img
      src={logos[token]}
      alt={token}
      className={className}
      height={height}
      width={width}
    />
  );
};

export default TokenLogo;
