// Modules
import { connect } from "react-redux";
import { includes, without, concat } from "lodash";
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

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  prefectures: stateProps.prefectures,
  selected: ownProps.selected,
  onChange: event => {
    const prefCode = event.target.value;
    if (!stateProps.population[prefCode]) {
      dispatchProps.getPopulationForPrefectureCode(prefCode)
    }
    const newSelected = includes(ownProps.selected, prefCode)
      ? without(ownProps.selected, prefCode)
      : concat(ownProps.selected, prefCode);
    ownProps.setSelected(newSelected);
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(PrefectureSelector);
