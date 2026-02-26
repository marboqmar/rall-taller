import { StatusMessage } from '../../../components/molecules/StatusMessage/StatusMessage';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Button } from '../../../components/atoms/Button/Button';
import { Icon } from '../../../components/atoms/Icon/Icon';

export const StatusMessageShowcase = () => {
  return (
    <div className="status-message-showcase showcase-item">
      <Heading>Status message</Heading>
      <div className="status-message-showcase__wrapper stack gap-xs">
        <StatusMessage type="info">Info status message</StatusMessage>
        <StatusMessage type="success">Success status message</StatusMessage>
        <StatusMessage type="warning">Warning status message</StatusMessage>
        <StatusMessage type="error">Error status message</StatusMessage>
        <StatusMessage type="info">
          Long error message. This is a very long error message that wraps to test alignment. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis felis at est condimentum,
          vel condimentum est venenatis. Pellentesque a mi vel felis congue tempor a vitae metus.
        </StatusMessage>
      </div>
    </div>
  );
};
