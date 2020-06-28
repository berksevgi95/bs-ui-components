module.exports = {
    env: {
        "browser": true,
        "amd": true,
        "node": true
    },
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    
    //If you want to use regular eslint configuration, toggle comments of these lines
    // extends: [
    //     'eslint:recommended',
    //     'plugin:@typescript-eslint/eslint-recommended',
    //     'plugin:@typescript-eslint/recommended',
    // ],

    //If you want to use airbnb eslint configuration, toggle comments of these lines
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,  
    },


    rules : {
        "react/prop-types": 0,
        "jsx-a11y/label-has-for": [2, {
            "required": {
                "some": ["nesting", "id"]
            }
        }]
    }
};