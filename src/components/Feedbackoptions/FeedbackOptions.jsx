import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>      
      <Container>
        {options.map(option => {
          return (
            <Button
              type="button"
              key={option}
              onClick={() => {
                onLeaveFeedback({ option });
              }}
            >
              {option}
            </Button>
          );
        })}
      </Container>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
