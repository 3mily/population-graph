// Modules
import { connect } from "react-redux";

import PopulationGraph from "./PopulationGraph";

const mapStateToProps = (state) => ({
  populations: state.population.data,
  prefectures: state.prefecture.data,
  isLoading: state.population.loading,
});

export default connect(mapStateToProps)(PopulationGraph)
