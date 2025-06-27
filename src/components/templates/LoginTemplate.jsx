import styled from "styled-components";
import { Title,InputText2 } from "../../index";
export function LoginTemplate() {
  return (<Container>
    <section className="contentCard">
        <div className="card">
<Title>Iniciar Sesión</Title>
<form>
    <InputText2>
    <input className="form__field" placeholder="email" type="email" />
    </InputText2>
      <InputText2>
    <input className="form__field" placeholder="contraseña" type="password" />
    </InputText2>
</form>
        </div>
        </section>
  </Container>);
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
    align-items: center;    
`