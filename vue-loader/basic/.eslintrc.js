module.exports = {
		"env": {
				"browser": true,
				"commonjs": true,
				"es6": true
		},
		"extends": "eslint:recommended",
		"parserOptions": {
				"ecmaFeatures": {
						"experimentalObjectRestSpread": true
				},
				"sourceType": "module"
		},
		"plugins": [
				"react",
				"html"
		],
		"rules": {
				"indent": [
						"error",
						"tab"
				],
				"linebreak-style": [
						"error",
						"windows"
				],
				"quotes": [
						"error",
						"single"
				],
				"semi": [
						"error",
						"always"
				],
				"no-var": [
					"error"
				],
				"no-console": [
					"error",
					{
						allow: ["log"]
					}
				]
		}
};