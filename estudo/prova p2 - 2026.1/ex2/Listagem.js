import PresenterEstados from "./src/Presenter";
import ViewEstados from "./src/View";

const view = new ViewEstados();
const presenter = new PresenterEstados(view);

presenter.desenharEstados();