import * as Icon from 'react-icons/fi';
import { Task, TaskStatus } from './TaskList';
import Container from '../reusable/Container';

interface Props {
  task: Task;
  state: TaskStatus;
}

const TaskEntry = ({ task, state }: Props) => (
  <Container.FlexRow className="items-center justify-between w-full border-b border-gray-300 py-4">
    <Container.Container>
      <span className="text-text text-lg">{task.label}</span>
    </Container.Container>
    <Container.Container>
      {state === TaskStatus.Pending && (
        <Icon.FiClock className="text-text" size={24} />
      )}
      {state === TaskStatus.Running && (
        <Icon.FiLoader className="text-text animate-spin" size={24} />
      )}
      {state === TaskStatus.Success && (
        <Icon.FiCheckCircle className="text-green-700" size={24} />
      )}
      {state === TaskStatus.Error && (
        <Icon.FiXCircle className="text-red-700" size={24} />
      )}
      {state === TaskStatus.Aborted && (
        <Icon.FiClock className="text-text" size={24} />
      )}
    </Container.Container>
  </Container.FlexRow>
);

export default TaskEntry;
