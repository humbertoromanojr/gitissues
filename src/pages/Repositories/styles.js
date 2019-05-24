import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePadding,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },

  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },

  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    fontSize: 16,
    color: colors.light,
  },

  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: metrics.baseMargin * 2,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    width: '85%',
    paddingHorizontal: metrics.basePadding,
  },

  button: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    width: 40,
    marginLeft: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.dark,
    fontSize: 16,
    textShadowColor: colors.white,
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 3,
    fontWeight: 'bold',
  },

  icon: {
    color: colors.dark,
  },
});

export default styles;
