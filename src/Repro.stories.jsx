import styled from 'styled-components';
import { ReactComponent as TestIcon } from '@app/svg/test.svg';

const Container = styled.div`
  font-family: ${({ theme }) => theme.font.family};
  padding: 40px;
`;

export const Repro = () => {
  const showResult = true;

  return (
    <Container>
      <h1>Ladle + Vite 6 + Custom Babel Repro</h1>
      
      <section>
        <h2>1. JSX Control Statements</h2>
        <If condition={showResult}>
          <p>✅ If condition from jsx-control-statements is working!</p>
        </If>
      </section>

      <section>
        <h2>2. Inline SVG</h2>
        <TestIcon style={{ width: '50px', height: '50px' }} />
        <p>(Should show a red circle above)</p>
      </section>

      <section>
        <h2>3. Path Aliases</h2>
        <p>Importing from <code>@app/svg/test.svg</code> worked if you see the icon.</p>
      </section>
    </Container>
  );
};
