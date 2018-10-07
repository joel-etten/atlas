import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {View} from 'react-native'
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import {Spinner} from '../../components';
import {required} from '../../helpers/validators';

const ReportEvent = ({loading, handleSubmit}) => (
  <View style={styles.container}>
    <Field name='title' label='Reason' validate={required} component={TextInput} />
    <Field name='description' label='Description' multiline validate={required} component={TextInput} />
    {
      loading ?
        <View style={styles.loading}>
          <Spinner />
        </View> :
        <Button label='Submit' gradient fullWidth onPress={handleSubmit} />

    }
  </View>
)

const styles = {
  container: {
    flex: 1,
    padding: Layout.spacing * 2,
    backgroundColor: Colors.background,
  },
  loading: {
    padding: Layout.spacing * 2,
  },
}
export default reduxForm({
  form: 'reportEvent',

})(ReportEvent)
