/**
 * Utilities for device checking
 *
 * @author: Giang Dao
 */
import DeviceDetector from '@/index.devices';

const mobileDetector = DeviceDetector.getDeviceDetector();
export default {
  isDevice() {
    return (DeviceDetector.isMobile && DeviceDetector.isMobile.any)
      || (mobileDetector && mobileDetector.mobile());
  },
  isPhone() {
    return (DeviceDetector.isMobile && DeviceDetector.isMobile.phone)
    || (mobileDetector && mobileDetector.phone());
  },
  isTablet() {
    return (DeviceDetector.isMobile && DeviceDetector.isMobile.tablet)
    || (mobileDetector && mobileDetector.tablet());
  },
};
