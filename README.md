"build": "lerna exec --parallel 'BABEL_ENV=build babel --root-mode upward src --out-dir dist --source-maps --extensions .ts,.tsx --delete-dir-on-start --no-comments'"

babel src --out-dir dist --source-maps --extensions .ts,.tsx --delete-dir-on-start --no-comments --ignore '**/*.spec.ts,**/*.stories.ts'