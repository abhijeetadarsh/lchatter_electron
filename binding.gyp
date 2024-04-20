{
  "targets": [
    {
      "target_name": "addon",
      "sources": [ "src/cpp/addon.cpp" ],
      'dependencies': [
        "<!(node -p \"require('node-addon-api').targets\"):node_addon_api",
      ],
    }
  ]
}
