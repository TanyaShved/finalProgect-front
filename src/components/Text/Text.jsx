import PropTypes from 'prop-types';
import s from './Text.module.css';

const Text = ({ style, children }) => {
    return (
        <p style={style}>
           {children}
        </p>
    )
}

Text.propTypes = {
  style: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default Text;