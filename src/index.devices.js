/*
 * General:
 * isMobile.any
 * isMobile.phone
 * isMobile.tablet
 *
 * Apple devices:
 * isMobile.apple.phone
 * isMobile.apple.ipod
 * isMobile.apple.tablet
 * isMobile.apple.device (any mobile Apple device)
 *
 * Android devices:
 * isMobile.android.phone
 * isMobile.android.tablet
 * isMobile.android.device (any mobile Android device)
 *
 * Windows devices:
 * isMobile.windows.phone
 * isMobile.windows.tablet
 * isMobile.windows.device (any mobile Windows device)
 */
import isMobile from 'ismobilejs';
import MobileDetect from 'mobile-detect';

/*
 * OS Detector:
 * window.mobileDetector.os() => String|null
 * AndroidOS, BlackBerryOS, PalmOS, SymbianOS,
 * WindowsMobileOS, WindowsPhoneOS,
 * iOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS
 *
 * Tablet Type:
 * window.mobileDetector.tablet() => String|null
 * iPad, NexusTablet, SamsungTablet, Kindle, ...
 *
 * Phone Type:
 * window.mobileDetector.phone() => String|null
 * iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus, ...
 */
export default {
  isMobile,
  getDeviceDetector() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return new MobileDetect(userAgent);
  },
};
