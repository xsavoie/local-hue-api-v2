const fakeLightsState = () => [
  {
    "alert": {
        "action_values": [
            "breathe"
        ]
    },
    "color": {
        "gamut": {
            "blue": {
                "x": 0.1532,
                "y": 0.0475
            },
            "green": {
                "x": 0.17,
                "y": 0.7
            },
            "red": {
                "x": 0.6915,
                "y": 0.3083
            }
        },
        "gamut_type": "C",
        "xy": {
            "x": 0.5016,
            "y": 0.4151
        }
    },
    "color_temperature": {
        "mirek": 443,
        "mirek_schema": {
            "mirek_maximum": 500,
            "mirek_minimum": 153
        },
        "mirek_valid": true
    },
    "dimming": {
        "brightness": 56.69,
        "min_dim_level": 0.20000000298023224
    },
    "dynamics": {
        "speed": 0,
        "speed_valid": false,
        "status": "none",
        "status_values": [
            "none",
            "dynamic_palette"
        ]
    },
    "effects": {
        "effect_values": [
            "no_effect",
            "candle",
            "fire"
        ],
        "status": "no_effect",
        "status_values": [
            "no_effect",
            "candle",
            "fire"
        ]
    },
    "id": "558fcd3a-06c7-4495-86fe-34060a970377",
    "id_v1": "/lights/6",
    "metadata": {
        "archetype": "sultan_bulb",
        "name": "Dining"
    },
    "mode": "normal",
    "on": {
        "on": false
    },
    "owner": {
        "rid": "b18f9f80-c2df-4d31-8b49-0c64521eef5a",
        "rtype": "device"
    },
    "type": "light"
},
{
  "alert": {
      "action_values": [
          "breathe"
      ]
  },
  "color": {
      "gamut": {
          "blue": {
              "x": 0.1532,
              "y": 0.0475
          },
          "green": {
              "x": 0.17,
              "y": 0.7
          },
          "red": {
              "x": 0.6915,
              "y": 0.3083
          }
      },
      "gamut_type": "C",
      "xy": {
          "x": 0.5535,
          "y": 0.2552
      }
  },
  "color_temperature": {
      "mirek": null,
      "mirek_schema": {
          "mirek_maximum": 500,
          "mirek_minimum": 153
      },
      "mirek_valid": false
  },
  "dimming": {
      "brightness": 40.16,
      "min_dim_level": 0.20000000298023224
  },
  "dynamics": {
      "speed": 0,
      "speed_valid": false,
      "status": "none",
      "status_values": [
          "none",
          "dynamic_palette"
      ]
  },
  "effects": {
      "effect_values": [
          "no_effect",
          "candle",
          "fire"
      ],
      "status": "no_effect",
      "status_values": [
          "no_effect",
          "candle",
          "fire"
      ]
  },
  "id": "e9e57d75-a7ac-4b03-8147-bf41252ae99a",
  "id_v1": "/lights/9",
  "metadata": {
      "archetype": "sultan_bulb",
      "name": "Tv"
  },
  "mode": "normal",
  "on": {
      "on": true
  },
  "owner": {
      "rid": "f63228c5-3db5-4e08-9da5-e0a74c225575",
      "rtype": "device"
  },
  "type": "light"
}
];

export { fakeLightsState };
