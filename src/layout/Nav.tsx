import { WavyLink } from 'react-wavy-transitions';
import { colors } from '../lib/colors';

export const Nav = () => (
  <nav>
    <WavyLink to="/" color={colors.primary}>
      Home
    </WavyLink>

    <WavyLink to="/about" color={colors.primary}>
      About
    </WavyLink>

    <WavyLink to="/contact" color={colors.primary}>
      Contact
    </WavyLink>
  </nav>
);
