import { connect } from "react-redux";

import { getPopulation } from "../../../redux/actions";

import PrefectureSelector from "./PrefectureSelector";

const mapStateToProps = (state) => ({
  prefectures: state.prefecture.data,
  population: state.population.data,
  isLoading: state.prefecture.loading,
  error: state.prefecture.error
})

const mapDispatchToProps = (dispatch) => ({
  getPopulationForPrefectureCode: (code) => dispatch(getPopulation(code))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrefectureSelector);
