// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Carousel } from "@bccmono/mycomps";
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <Carousel />
      <NxWelcome title="bccmono" />
      <div />
    </>
  );
}

export default App;
