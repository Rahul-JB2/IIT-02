const { withAndroidManifest } = require('expo/config-plugins');

module.exports = function withAppQueries(config){
 return withAndroidManifest(config, config => {
  const manifest=config.modResults.manifest;
  manifest.queries = manifest.queries || [];
  manifest.queries.push({
   package:[
    { $:{ 'android:name':'com.google.android.youtube' } },
    { $:{ 'android:name':'com.android.chrome' } },
    { $:{ 'android:name':'com.pocketfm' } },
    { $:{ 'android:name':'com.pubg.imobile' } }
   ]
  });
  return config;
 });
};