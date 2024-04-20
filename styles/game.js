import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gui: {
    flex: 1,
    backgroundColor: '#000',
    borderWidth: 8,
    padding: 3,
  },
  banner: {
    flex: 0.25,
    justifyContent: 'space-around',
    backgroundColor: '#AFF',
    borderWidth: 4,
    padding: 2,
  },
  info: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0FF',
    borderWidth: 6,
    padding: 10,
  },
  stats: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
  },
  pet: {
    flex: 1,
    backgroundColor: '#BFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    overflow: 'hidden',
  },
  menu: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    backgroundColor: '#AFF',
    borderWidth: 4,
    padding: 2,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-around',
    borderWidth: 4,
  }
});

export default styles;