export function condition(condition){
  switch(condition){
    case 'snow':
      return icon = {
        name: 'snow-outline',
        color: '#1ec9ff'
      };
      break;
      case 'clear_day':
        return icon = {
          name: 'partly-sunny-outline',
          color: '#ffb300'
        };
      break;
      case 'rain':
        return icon = {
          name: 'rainy-outline',
          color: '#1ec9ff'
        };
      break;
      case 'storm':
        return icon = {
          name: 'thunderstorm-outline',
          color: '#1f229c'
        };
      break;
      default:
        return icon = {
          name: 'cloud-outline',
          color: '#1ec9ff'
        }

  }
}