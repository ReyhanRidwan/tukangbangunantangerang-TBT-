/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Optimizes a Cloudinary image URL by adding path: /upload/f_auto,q_auto,w_1200,c_limit/
 * for maximum compression with pristine quality.
 */
export function optimizeCloudinaryUrl(url: string): string {
  if (!url) return 'https://placehold.co/800x600/18181b/ffffff?text=Image+Not+Found';
  if (!url.includes('cloudinary.com')) return url;
  
  // If it already has our set of compression settings, return as is
  if (url.includes('f_auto,q_auto,w_1200,c_limit')) return url;

  // Insert custom compression path
  if (url.includes('/image/upload/')) {
    return url.replace('/image/upload/', '/image/upload/f_auto,q_auto,w_1200,c_limit/');
  }
  
  return url;
}

export const IMAGES = {
  // Hero Carousel
  heroSlide1: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941841/slide2_vlhgia.jpg'),
  heroSlide2: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941396/john-fornander-Id7u0EkTjBE-unsplash_p7ftfx.jpg'),

  // Services
  servicesHighlight: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941746/naksha-banwao-3ddHcjHmiGw-unsplash_jdslxv.jpg'),
  serviceNewBuilding: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941841/slide2_vlhgia.jpg'),
  serviceRenovation: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941859/spacejoy-9M66C_w_ToM-unsplash_kqkwhw.jpg'),
  serviceArchitecture: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941852/spacejoy-4xRP0Ajk9ys-unsplash_olxzns.jpg'),
  serviceAdditional: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941346/etienne-girardet-sgYamIzhAhg-unsplash_vvnxjq.jpg'),

  // Before After Example (Home Tab)
  homeBefore: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941823/sebastian-herrmann-ysqlsEnWpLg-unsplash_pbv806.jpg'),
  homeAfter: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941801/ronnie-george-S0-e9aITeHc-unsplash_ogymgo.jpg'),

  // Projects / Portfolio
  project1_before: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941813/sandy-millar-u1KG_wZTnkg-unsplash_kglxsg.jpg'),
  project1_after: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941396/john-fornander-Id7u0EkTjBE-unsplash_p7ftfx.jpg'),
  project1_gallery: [
    optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941380/iwood-R5v8Xtc0ecg-unsplash_nfr6rt.jpg'),
    optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941776/roberto-nickson-emqnSQwQQDo-unsplash_vrhxtd.jpg'),
    optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941755/naksha-banwao-nAFuA8t5K9Y-unsplash_v8sxdy.jpg'),
  ],

  project2_before: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941769/olek-buzunov-cm-gqu42F20-unsplash_gmblqa.jpg'),
  project2_after: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941852/spacejoy-4xRP0Ajk9ys-unsplash_olxzns.jpg'),
  project2_gallery: [
    optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941832/serhat-beyazkaya-ayWgRkCk2sQ-unsplash_whjzpo.jpg'),
    optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941380/iwood-R5v8Xtc0ecg-unsplash_nfr6rt.jpg'),
    optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941885/zac-gudakov-ztWpwTEx728-unsplash_b2wvie.jpg'),
  ],

  project3_before: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941363/house_decoration_fgbtju.jpg'),
  project3_after: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941867/spacejoy-YI2YkyaREHk-unsplash_t2s8ka.jpg'),
  project3_gallery: [
    optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941396/john-fornander-Id7u0EkTjBE-unsplash_p7ftfx.jpg'),
    optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941859/spacejoy-9M66C_w_ToM-unsplash_kqkwhw.jpg'),
    optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941100/collov-home-design-4_jQL4JCS98-unsplash_borowp.jpg'),
  ],

  // About us
  teamConstruction: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941792/ronnakorn-triraganon-IvEYfb-3B70-unsplash_fwhdz6.jpg'),
  founder: optimizeCloudinaryUrl('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778943896/15ba0e3c10587844c0e73ad425d1adcd_gedrjd.jpg'),
};
