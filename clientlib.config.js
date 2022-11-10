/**
 * Configuration file for aem-clientlib-generator
 */
module.exports = {
  // default working directory (can be changed per 'cwd' in every asset option)
  context: __dirname,

  // path to the clientlib root folder (output)
  clientLibRoot: 'dist/clientlibs',

  // define all clientlib options here as array... (multiple clientlibs)
  libs: [
    {
      name: 'aemlive',
      assets: {
        js: [
          'src/js/*.js'
        ],
        css: [
          'src/css/*.css'
        ]
      },
      // Clientlib categories this will register to
      categories: [
        'aemforms.aemlive.clientlibs'
      ],
      // Prevent AEM from minifying JS bundle with ancient YUI
      jsProcessor: [
        'default:none',
        'min:none'
      ],
      dependencies: [
        "aemforms.thirdparty.clientlibs", // define clientlib dependency
      ],
      // Package format XML for vault or JSON for SLING-INF
      serializationFormat: 'xml'
    }
    ,
    {
      name: 'thirdpartylibs',
      assets:{
        js: [
          'src/thirdpartylibs/*.js'
        ]
      },
      categories: [
        'aemforms.thirdparty.clientlibs'
      ],
      serializationFormat: 'xml'


    }
  ]
}
