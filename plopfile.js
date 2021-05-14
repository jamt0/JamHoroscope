module.exports = plop => {
    plop.setGenerator('component', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your component name?'
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/containers/{{pascalCase name}}/index.tsx',
          templateFile: 'plop_templates/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/components/layouts/{{pascalCase name}}/index.tsx',
          templateFile: 'plop_templates/ComponentView.tsx.hbs',
        },
      ],
    });
    plop.setGenerator('page', {
        description: 'Create a page',
        prompts: [
          {
            type: 'input',
            name: 'name',
            message: 'What is your page name?'
          },
        ],
        actions: [
          {
            type: 'add',
            path: 'src/pages/containers/{{pascalCase name}}/index.tsx',
            templateFile: 'plop_templates/Page.tsx.hbs',
          },
          {
            type: 'add',
            path: 'src/pages/layouts/{{pascalCase name}}View/index.tsx',
            templateFile: 'plop_templates/PageView.tsx.hbs',
          },
        ],
      });
  };