const config = {
  config: {
    backend: {
      name: 'git-gateway',
      branch: 'master'
    },
    media_folder: 'template/public/img/uploads',
    public_folder: '/img/uploads',
    slug: {
      encoding: 'ascii',
      clean_accents: true,
      sanitize_replacement: '-'
    },
    collections: [
      {
        name: 'pages',
        label: 'Páginas',
        delete: false,
        files: [
          {
            name: 'home',
            label: 'Página inicial',
            file: 'content/home.json',
            fields: [
              {
                label: 'Meta title',
                name: 'meta_title',
                widget: 'string',
                hint: 'Título exibido na aba do navegador e nas respostas em motores de busca, relevante para SEO',
                required: false
              },
              {
                label: 'Meta description',
                name: 'meta_description',
                widget: 'string',
                hint: 'Descrição exibida nos resultados de motores de busca, relevante para SEO',
                required: false
              },
              {
                label: 'Slider',
                name: 'slider',
                widget: 'object',
                hint: 'Slider de imagens exibido na página inicial',
                fields: [
                  {
                    label: 'Autoplay',
                    name: 'autoplay',
                    hint: 'Tempo de exibição de cada slide em milisegundos, defina 0 para o slide não mudar automaticamente',
                    required: false,
                    widget: 'number'
                  },
                  {
                    label: 'Slides',
                    name: 'slides',
                    widget: 'list',
                    fields: [
                      {
                        label: 'Imagem',
                        name: 'img',
                        widget: 'image'
                      },
                      {
                        label: 'Link',
                        required: false,
                        name: 'link',
                        widget: 'string'
                      },
                      {
                        label: 'Alt',
                        required: false,
                        name: 'alt',
                        widget: 'string'
                      }
                    ]
                  }
                ]
              },
              {
                label: 'Exibir barra de informações',
                name: 'pitbar',
                widget: 'boolean',
                default: true,
                required: false
              },
              {
                name: 'showcase',
                label: 'Vitrine',
                widget: 'list',
                fields: [
                  {
                    label: 'Coleção',
                    required: false,
                    name: 'collection',
                    widget: 'collections'
                  }
                ]
              },
              {
                label: 'Conteúdo adicional',
                name: 'additional_content',
                widget: 'markdown',
                hint: 'Markdown exibido no fim do container da página inicial',
                required: false
              }
            ]
          },
          {
            name: 'products',
            label: 'Produtos',
            hint: 'Configuração geral das páginas de produto',
            file: 'content/products.json',
            fields: [
              {
                label: 'Exibir barra de informações',
                name: 'pitbar',
                widget: 'boolean',
                default: false,
                required: false
              },
              {
                label: 'Quem comrpou x também comprou',
                name: 'recommended',
                widget: 'object',
                hint: 'Slider de produtos que foram comprados por outros usuários que também adquiriam o produto visualizado',
                fields: [
                  {
                    label: 'Mostrar produtos recomendados',
                    name: 'recommended_on',
                    widget: 'boolean'
                  },
                  {
                    label: 'Título',
                    required: false,
                    name: 'title',
                    widget: 'string'
                  }
                ]
              },
              {
                label: 'Produtos relacionados',
                name: 'related',
                widget: 'object',
                hint: 'Ativa slider de produtos com relacionados ao produto visualisado por categoria e/ou marca.',
                fields: [
                  {
                    label: 'Mostrar produtos relacionados',
                    name: 'related_on',
                    widget: 'boolean'
                  },
                  {
                    label: 'Título',
                    required: false,
                    name: 'title',
                    widget: 'string'
                  }
                ]
              },
              {
                label: 'Adicionar coleção',
                name: 'add_collection',
                widget: 'object',
                hint: 'Ativa no final da página slider de produtos de uma coleção fixa',
                fields: [
                  {
                    label: 'Mostrar coleção',
                    name: 'collection_on',
                    widget: 'boolean'
                  },
                  {
                    label: 'Título',
                    required: false,
                    name: 'title',
                    widget: 'string'
                  },
                  {
                    label: 'ID da coleção',
                    required: false,
                    name: 'collection',
                    widget: 'string',
                    hint: 'Entrar com o ID da coleção',
                    que: 'pode ser visto nesta página: https://app.e-com.plus/#/resources/collections\''
                  }
                ]
              },
              {
                label: 'Conteúdo adicional',
                name: 'additional_content',
                widget: 'markdown',
                hint: 'Markdown exibido no fim do container das páginas de produto',
                required: false
              }
            ]
          },
          {
            name: 'search',
            label: 'Busca',
            hint: 'Configuração geral das páginas de busca',
            file: 'content/search.json',
            fields: [
              {
                label: 'Exibir barra de informações',
                name: 'pitbar',
                widget: 'boolean',
                default: false,
                required: false
              },
              {
                label: 'Conteúdo adicional',
                name: 'additional_content',
                widget: 'markdown',
                hint: 'Markdown exibido no fim do container da página de busca',
                required: false
              }
            ]
          },
          {
            name: 'collections',
            label: 'Coleções',
            hint: 'Configuração geral das páginas de coleções',
            file: 'content/collections.json',
            fields: [
              {
                label: 'Exibir barra de informações',
                name: 'pitbar',
                widget: 'boolean',
                default: false,
                required: false
              },
              {
                label: 'Conteúdo adicional',
                name: 'additional_content',
                widget: 'markdown',
                hint: 'Markdown exibido no fim do container da página das coleções',
                required: false
              }
            ]
          },
          {
            name: 'categories',
            label: 'Categorias',
            hint: 'Configuração geral das páginas de categorias',
            file: 'content/categories.json',
            fields: [
              {
                label: 'Exibir barra de informações',
                name: 'pitbar',
                widget: 'boolean',
                default: false,
                required: false
              },
              {
                label: 'Conteúdo adicional',
                name: 'additional_content',
                widget: 'markdown',
                hint: 'Markdown exibido no fim do container das páginas de categoria',
                required: false
              }
            ]
          },
          {
            name: 'brands',
            label: 'Marcas',
            hint: 'Configuração geral das páginas de marca',
            file: 'content/brands.json',
            fields: [
              {
                label: 'Exibir barra de informações',
                name: 'pitbar',
                widget: 'boolean',
                default: false,
                required: false
              },
              {
                label: 'Conteúdo adicional',
                name: 'additional_content',
                widget: 'markdown',
                hint: 'Markdown exibido no fim do container das páginas das marcas',
                required: false
              }
            ]
          },
          {
            name: 'blog',
            label: 'Blog',
            hint: 'Configuração geral da página do blog',
            file: 'content/blog.json',
            fields: [
              {
                label: 'Conteúdo adicional',
                name: 'additional_content',
                widget: 'markdown',
                hint: 'Markdown exibido no fim do container da página do blog',
                required: false
              },
              {
                label: 'Meta title',
                name: 'meta_title',
                widget: 'string',
                hint: 'Título da página exibido na aba do navegador e nas respostas em motores de busca, relevante para SEO',
                required: false
              },
              {
                label: 'Meta description',
                name: 'meta_description',
                widget: 'string',
                hint: 'Ddescrição da página exibida nos resultados de motores de busca, relevante para SEO',
                required: false
              }
            ]
          }
        ]
      },
      {
        name: 'blog_posts',
        label: 'Posts para o blog',
        folder: 'content/posts',
        extension: 'json',
        create: true,
        slug: '{{slug}}-{{year}}-{{month}}-{{day}}',
        fields: [
          {
            label: 'Título',
            name: 'title',
            widget: 'string'
          },
          {
            label: 'Data de publicação',
            name: 'date',
            widget: 'datetime',
            required: false
          },
          {
            label: 'Imagem em destaque',
            name: 'thumbnail',
            widget: 'image',
            required: false,
            hint: 'Sugerimos 900px como largura máxima'
          },
          {
            label: 'Alt da imagem',
            name: 'alt',
            widget: 'string',
            required: false,
            hint: 'Alt tag da imagem'
          },
          {
            label: 'Descrição curta',
            name: 'description',
            widget: 'text',
            required: false
          },
          {
            label: 'Corpo',
            name: 'body',
            widget: 'markdown',
            required: false
          },
          {
            label: 'Meta title',
            name: 'meta_title',
            widget: 'string',
            hint: 'Título da página exibido na aba do navegador e nas respostas em motores de busca, relevante para SEO',
            required: false
          },
          {
            label: 'Meta description',
            name: 'meta_description',
            widget: 'string',
            hint: 'Ddescrição da página exibida nos resultados de motores de busca, relevante para SEO',
            required: false
          }
        ]
      },
      {
        name: 'extra_pages',
        label: 'Extra Pages',
        description: 'Páginas extra para conteúdo como Sobre nós, Política de privacidade, etc',
        folder: 'content/pages',
        extension: 'json',
        create: true,
        slug: '{{slug}}',
        fields: [
          {
            label: 'Título',
            name: 'title',
            widget: 'string'
          },
          {
            label: 'Data de publicação',
            name: 'date',
            widget: 'datetime',
            required: false
          },
          {
            label: 'Imagem em destaque',
            name: 'thumbnail',
            widget: 'image',
            required: false,
            hint: 'Sugerimos 900px como largura máxima'
          },
          {
            label: 'Alt da imagem',
            name: 'alt',
            widget: 'string',
            required: false,
            hint: 'Alt tag da imagem'
          },
          {
            label: 'Descrição curta',
            name: 'description',
            widget: 'text',
            required: false
          },
          {
            label: 'Meta title',
            name: 'meta_title',
            widget: 'string',
            hint: 'Título da página exibido na aba do navegador e nas respostas em motores de busca, relevante para SEO',
            required: false
          },
          {
            label: 'Meta description',
            name: 'meta_description',
            widget: 'string',
            hint: 'Ddescrição da página exibida nos resultados de motores de busca, relevante para SEO',
            required: false
          },
          {
            label: 'Exibir barra de informações',
            name: 'pitbar',
            widget: 'boolean',
            default: false,
            required: false
          },
          {
            label: 'Inserir html',
            name: 'code',
            widget: 'text',
            required: false
          },
          {
            label: 'Corpo',
            name: 'body',
            widget: 'markdown',
            required: false
          }
        ]
      },
      {
        name: 'settings',
        label: 'Configurações',
        description: 'General settings to modify the site identity and metadata',
        delete: false,
        editor: {
          preview: false
        },
        files: [
          {
            name: 'general',
            label: 'Configurações gerais',
            file: 'content/settings.json',
            fields: [
              {
                label: 'Store ID',
                name: 'store_id',
                hint: 'Id da loja, pode ser encontrado na página de configurações do painel',
                required: false,
                widget: 'number'
              },
              {
                label: 'Name',
                name: 'name',
                widget: 'string'
              },
              {
                label: 'Short Name',
                name: 'short_name',
                widget: 'string',
                hint: 'Deve conter apenas letras, sem caracteres especiais ou espaços'
              },
              {
                label: 'Short Description',
                name: 'description',
                widget: 'text'
              },
              {
                label: 'Primary Color',
                name: 'primary_color',
                widget: 'color'
              },
              {
                label: 'Secondary Color',
                name: 'secondary_color',
                widget: 'color'
              },
              {
                label: 'App Background Color',
                name: 'bg_color',
                widget: 'color'
              },
              {
                label: 'Tema',
                name: 'theme',
                widget: 'object',
                fields: [
                  {
                    label: 'Estilo',
                    name: 'bootswatch',
                    widget: 'select',
                    options: [
                      {
                        label: 'Padrão',
                        value: '_'
                      },
                      {
                        label: 'Cerulean',
                        value: 'cerulean'
                      },
                      {
                        label: 'Cosmo',
                        value: 'cosmo'
                      },
                      {
                        label: 'Cyborg',
                        value: 'cyborg'
                      },
                      {
                        label: 'Darkly',
                        value: 'darkly'
                      },
                      {
                        label: 'Flatly',
                        value: 'flatly'
                      },
                      {
                        label: 'Journal',
                        value: 'journal'
                      },
                      {
                        label: 'Litera',
                        value: 'litera'
                      },
                      {
                        label: 'Lumen',
                        value: 'lumen'
                      },
                      {
                        label: 'Lux',
                        value: 'lux'
                      },
                      {
                        label: 'Materia',
                        value: 'materia'
                      },
                      {
                        label: 'Minty',
                        value: 'minty'
                      },
                      {
                        label: 'Pulse',
                        value: 'pulse'
                      },
                      {
                        label: 'Sandstone',
                        value: 'sandstone'
                      },
                      {
                        label: 'Simplex',
                        value: 'simplex'
                      },
                      {
                        label: 'Sketchy',
                        value: 'sketchy'
                      },
                      {
                        label: 'Slate',
                        value: 'slate'
                      },
                      {
                        label: 'Solar',
                        value: 'solar'
                      },
                      {
                        label: 'Spacelab',
                        value: 'spacelab'
                      },
                      {
                        label: 'Superhero',
                        value: 'superhero'
                      },
                      {
                        label: 'United',
                        value: 'united'
                      },
                      {
                        label: 'Yeti',
                        value: 'yeti'
                      }
                    ]
                  }
                ]
              },
              {
                label: 'Logo',
                name: 'logo',
                widget: 'image',
                required: false
              },
              {
                label: 'Mini Logo',
                name: 'mini_logo',
                widget: 'image',
                required: false
              },
              {
                label: 'Icon',
                name: 'icon',
                widget: 'image'
              },
              {
                label: 'Large Icon',
                name: 'large_icon',
                widget: 'image'
              },
              {
                label: 'Favicon',
                name: 'favicon',
                widget: 'image'
              },
              {
                label: 'Language',
                name: 'lang',
                widget: 'hidden',
                default: 'pt_br'
              },
              {
                label: 'Moeda',
                name: 'currency',
                widget: 'hidden',
                default: 'BRL'
              },
              {
                label: 'Símbolo da moeda',
                name: 'currency_symbol',
                widget: 'hidden',
                default: 'R$'
              },
              {
                label: 'Código do país',
                name: 'country_code',
                widget: 'hidden',
                default: 'BR'
              }
            ]
          },
          {
            name: 'dictionary',
            label: 'Dicionário',
            delete: false,
            file: 'content/dictionary/pt_br.json',
            fields: [
              {
                label: 'Buscar produtos',
                name: 'search_products',
                widget: 'string'
              },
              {
                label: 'Abrir carrinho',
                name: 'open_cart',
                widget: 'string'
              },
              {
                label: 'Minha conta',
                name: 'my_account',
                widget: 'string'
              },
              {
                label: 'Produtos populares',
                name: 'popular_products',
                widget: 'string'
              },
              {
                label: 'Ver todas categorias',
                name: 'see_all_category',
                widget: 'string'
              }
            ]
          },
          {
            name: 'social',
            file: 'content/social.json',
            label: 'Sociais',
            hint: 'Configurações para compartilhamento da loja',
            fields: [
              {
                label: 'Open Graphs Image',
                name: 'og_image',
                required: false,
                widget: 'image',
                hint: 'Imagem que é exibida quando o site é compartilhado'
              },
              {
                label: 'ID do app Facebook',
                name: 'fb_app_id',
                required: false,
                widget: 'string'
              },
              {
                label: 'Username do twitter',
                name: 'twitter_username',
                required: false,
                widget: 'string'
              }
            ]
          },
          {
            name: 'contacts',
            file: 'content/contacts.json',
            label: 'Contatos',
            hint: 'Contatos da loja, exibidos em várias páginas',
            fields: [
              {
                label: 'E-mail',
                name: 'email',
                required: false,
                widget: 'string'
              },
              {
                label: 'Telefone',
                name: 'phone',
                required: false,
                widget: 'string'
              },
              {
                label: 'Endereço',
                name: 'address',
                required: false,
                widget: 'string'
              },
              {
                label: 'CNPJ/CPF',
                name: 'doc_number',
                required: false,
                widget: 'string'
              },
              {
                label: 'Whatsapp',
                name: 'whatsapp',
                required: false,
                widget: 'string'
              },
              {
                label: 'Facebook',
                name: 'facebook',
                widget: 'string',
                required: false
              },
              {
                label: 'Twitter',
                name: 'twitter',
                widget: 'string',
                required: false
              },
              {
                label: 'Youtube',
                name: 'youtube',
                widget: 'string',
                required: false
              },
              {
                label: 'Instagram',
                name: 'instagram',
                widget: 'string',
                required: false
              },
              {
                label: 'Pinterest',
                name: 'pinterest',
                widget: 'string',
                required: false
              },
              {
                label: 'LinkedIn',
                name: 'linkedin',
                widget: 'string',
                required: false
              }
            ]
          },
          {
            label: 'Informações',
            file: 'content/info.json',
            name: 'info',
            hint: 'Informações gerais da loja, exibidas em várias páginas',
            widget: 'object',
            fields: [
              {
                label: 'Preço em destaque',
                name: 'main_price',
                hint: 'Preço que terá destaque ao exibir o produto',
                widget: 'select',
                options: [
                  {
                    label: 'Total',
                    value: 'total'
                  },
                  {
                    label: 'Com desconto',
                    value: 'discount'
                  },
                  {
                    label: 'Parcelado',
                    value: 'installments'
                  }
                ]
              },
              {
                label: 'Frete',
                name: 'shipping',
                widget: 'object',
                fields: [
                  {
                    label: 'Texto',
                    required: false,
                    name: 'text',
                    widget: 'string'
                  },
                  {
                    label: 'Link',
                    required: false,
                    name: 'link',
                    widget: 'string'
                  },
                  {
                    label: 'Exibir na barra de informações',
                    name: 'show',
                    widget: 'boolean',
                    default: true,
                    required: false
                  }
                ]
              },
              {
                label: 'Parcelamento',
                name: 'installments',
                widget: 'object',
                fields: [
                  {
                    label: 'Texto',
                    required: false,
                    name: 'text',
                    widget: 'string'
                  },
                  {
                    label: 'Link',
                    required: false,
                    name: 'link',
                    widget: 'string'
                  },
                  {
                    label: 'Exibir na barra de informações',
                    name: 'show',
                    widget: 'boolean',
                    default: true,
                    required: false
                  }
                ]
              },
              {
                label: 'Trocas',
                name: 'exchange',
                widget: 'object',
                fields: [
                  {
                    label: 'Texto',
                    required: false,
                    name: 'text',
                    widget: 'string'
                  },
                  {
                    label: 'Link',
                    required: false,
                    name: 'link',
                    widget: 'string'
                  },
                  {
                    label: 'Exibir na barra de informações',
                    name: 'show',
                    widget: 'boolean',
                    default: true,
                    required: false
                  }
                ]
              },
              {
                label: 'Promoção',
                name: 'promo',
                widget: 'object',
                fields: [
                  {
                    label: 'Texto',
                    required: false,
                    name: 'text',
                    widget: 'string'
                  },
                  {
                    label: 'Link',
                    required: false,
                    name: 'link',
                    widget: 'string'
                  },
                  {
                    label: 'Exibir na barra de informações',
                    name: 'show',
                    widget: 'boolean',
                    default: true,
                    required: false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'layout',
        label: 'Layout',
        description: 'Layout aplicado a todas páginas',
        delete: false,
        editor: {
          preview: false
        },
        files: [
          {
            name: 'header',
            label: 'Header',
            file: 'content/header.json',
            fields: [
              {
                label: 'Tarja de marketing ',
                name: 'marketing_stripe',
                widget: 'object',
                hint: 'Tarja na cor secundária com texto e botão, caso não seja configurada não é exibida na loja',
                fields: [
                  {
                    label: 'Texto',
                    name: 'text',
                    required: false,
                    widget: 'string'
                  },
                  {
                    label: 'Link',
                    name: 'link',
                    required: false,
                    widget: 'string'
                  }
                ]
              },
              {
                label: 'Tarja de contatos',
                name: 'contacts_stripe',
                widget: 'object',
                hint: 'Tarja com contatos da loja, como páginas internas, telefones e redes sociais',
                fields: [
                  {
                    label: 'Páginas',
                    name: 'pages',
                    widget: 'list',
                    fields: [
                      {
                        label: 'Título',
                        name: 'title',
                        required: false,
                        widget: 'string'
                      },
                      {
                        label: 'Link',
                        name: 'link',
                        required: false,
                        widget: 'string'
                      }
                    ]
                  },
                  {
                    label: 'Mostrar telefone e whatsapp',
                    name: 'phone_wpp',
                    required: false,
                    widget: 'boolean'
                  },
                  {
                    label: 'Mostrar redes sociais',
                    name: 'socials',
                    required: false,
                    widget: 'boolean'
                  }
                ]
              }
            ]
          },
          {
            name: 'footer',
            label: 'Footer',
            file: 'content/footer.json',
            fields: [
              {
                label: 'Descrição',
                name: 'description',
                widget: 'object',
                fields: [
                  {
                    label: 'Título',
                    hint: 'Em destaque, dentro de uma tag H2',
                    required: false,
                    name: 'title',
                    widget: 'string'
                  },
                  {
                    label: 'Texto',
                    required: false,
                    name: 'text',
                    widget: 'string'
                  }
                ]
              },
              {
                label: 'Lista de links 1',
                name: 'links_1',
                widget: 'object',
                hint: 'Lista de links normalmente utilizada para exibir páginas como, Sobre nós e Política de privacidade',
                fields: [
                  {
                    label: 'Listar páginas',
                    hint: 'Ativar para listar as páginas extra automáticamente',
                    name: 'list_pages',
                    widget: 'boolean',
                    default: true
                  },
                  {
                    label: 'Título',
                    required: false,
                    name: 'title',
                    widget: 'string'
                  },
                  {
                    label: 'Links',
                    name: 'list',
                    widget: 'list',
                    fields: [
                      {
                        label: 'Texto',
                        required: false,
                        name: 'text',
                        widget: 'string'
                      },
                      {
                        label: 'URL',
                        required: false,
                        name: 'url',
                        widget: 'string'
                      }
                    ]
                  }
                ]
              },
              {
                label: 'Lista de links 2',
                name: 'links_2',
                widget: 'object',
                hint: 'Lista adicional de links, para exibir páginas',
                fields: [
                  {
                    label: 'Listar categorias',
                    hint: 'Ativar para listar as categorias da loja automáticamente',
                    name: 'list_categories',
                    widget: 'boolean',
                    default: true
                  },
                  {
                    label: 'Título',
                    required: false,
                    name: 'title',
                    widget: 'string'
                  },
                  {
                    label: 'Links',
                    name: 'list',
                    widget: 'list',
                    fields: [
                      {
                        label: 'Texto',
                        required: false,
                        name: 'text',
                        widget: 'string'
                      },
                      {
                        label: 'URL',
                        required: false,
                        name: 'url',
                        widget: 'string'
                      }
                    ]
                  }
                ]
              },
              {
                label: 'Contatos',
                name: 'contacts',
                widget: 'object',
                hint: 'Contatos da loja',
                fields: [
                  {
                    label: 'Título',
                    required: false,
                    name: 'title',
                    widget: 'string'
                  },
                  {
                    label: 'Mostrar telefone e whatsapp',
                    name: 'phone_wpp',
                    required: false,
                    widget: 'boolean'
                  },
                  {
                    label: 'Mostar email',
                    required: false,
                    name: 'email',
                    widget: 'boolean'
                  },
                  {
                    label: 'Mostrar redes  sociais',
                    name: 'socials',
                    required: false,
                    widget: 'boolean'
                  }
                ]
              },
              {
                label: 'Selos',
                name: 'stamps',
                widget: 'list',
                fields: [
                  {
                    label: 'Imagem',
                    required: false,
                    name: 'src',
                    widget: 'image'
                  },
                  {
                    label: 'alt',
                    required: false,
                    name: 'alt',
                    widget: 'string'
                  },
                  {
                    label: 'Link',
                    required: false,
                    name: 'link',
                    widget: 'string'
                  }
                ]
              },
              {
                label: 'Meios de pagamento',
                name: 'payment_methods',
                widget: 'object',
                fields: [
                  {
                    label: 'Boleto',
                    name: 'boleto',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'Visa',
                    name: 'visa',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'Mastercard',
                    name: 'mastercard',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'Elo',
                    name: 'elo',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'American Express',
                    name: 'amex',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'Hipercard',
                    name: 'hipercard',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'Hiper',
                    name: 'hiper',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'Diners',
                    name: 'diners',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'Aura',
                    name: 'aura',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'Itaú',
                    name: 'itau',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'Bradesco',
                    name: 'bradesco',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'Banco do Brasil',
                    name: 'bb',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'Santander',
                    name: 'santander',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'Citibank',
                    name: 'citibank',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'HSBC',
                    name: 'hsbc',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'Banrisul',
                    name: 'banrisul',
                    widget: 'boolean',
                    default: true,
                    required: false
                  },
                  {
                    label: 'Mais',
                    name: 'mais',
                    widget: 'boolean',
                    default: true,
                    required: false
                  }
                ]
              },
              {
                label: 'Créditos',
                name: 'credits',
                widget: 'string',
                required: false
              }
            ]
          }
        ]
      },
      {
        name: 'widgets',
        label: 'Widgets',
        delete: false,
        editor: {
          preview: false
        },
        files: [
          {
            label: 'Login de usuários',
            name: 'ecomplus_widget_user',
            file: 'content/widgets/ecomplus-widget-user.json',
            fields: [
              {
                name: 'pkg',
                widget: 'hidden',
                default: '@ecomplus/widget-user'
              },
              {
                label: 'Ativar',
                hint: 'Caixa de login na página, sem redirecionar ou abrir nova guia',
                name: 'active',
                required: false,
                widget: 'boolean'
              },
              {
                label: 'Apenas em desktops',
                name: 'desktopOnly',
                hint: 'Desativa o widget em dispositivos móveis',
                required: false,
                widget: 'boolean'
              }
            ]
          },
          {
            label: 'Busca instantânea',
            name: 'ecomplus_widget_search',
            file: 'content/widgets/ecomplus-widget-search.json',
            fields: [
              {
                name: 'pkg',
                widget: 'hidden',
                default: '@ecomplus/widget-search'
              },
              {
                label: 'Ativar',
                hint: 'Exibe uma prévia de resultado de busca logo abaixo do campo de pesquisa',
                name: 'active',
                required: false,
                widget: 'boolean'
              },
              {
                label: 'Apenas em desktops',
                name: 'desktopOnly',
                hint: 'Desativa o widget em dispositivos móveis',
                required: false,
                widget: 'boolean'
              }
            ]
          },
          {
            label: 'Motor de busca',
            name: 'ecomplus_widget_search_engine',
            file: 'content/widgets/ecomplus-widget-search-engine.json',
            fields: [
              {
                name: 'pkg',
                widget: 'hidden',
                default: '@ecomplus/widget-search-engine'
              },
              {
                label: 'Ativar',
                hint: 'Widget para exibir resultados de busca na página',
                name: 'active',
                required: false,
                widget: 'boolean'
              },
              {
                label: 'Apenas em desktops',
                name: 'desktopOnly',
                hint: 'Desativa o widget em dispositivos móveis',
                required: false,
                widget: 'boolean'
              }
            ]
          },
          {
            label: 'Minicart',
            name: 'ecomplus_widget_minicart',
            file: 'content/widgets/ecomplus-widget-minicart.json',
            fields: [
              {
                name: 'pkg',
                widget: 'hidden',
                default: '@ecomplus/widget-minicart'
              },
              {
                label: 'Ativar',
                hint: 'Esse widget faz que o carrinho seja aberto na lateral da tela sem redirecionar da página',
                name: 'active',
                required: false,
                widget: 'boolean'
              },
              {
                label: 'Apenas em desktops',
                name: 'desktopOnly',
                hint: 'Desativa o widget em dispositivos móveis',
                required: false,
                widget: 'boolean'
              }
            ]
          },
          {
            label: 'Card de produtos',
            name: 'ecomplus_widget_product_card',
            file: 'content/widgets/ecomplus-widget-product-card.json',
            fields: [
              {
                name: 'pkg',
                widget: 'hidden',
                default: '@ecomplus/widget-product-card'
              },
              {
                label: 'Ativar',
                hint: 'Card de produtos exibido na vitrine e em vários outros pontos da loja',
                name: 'active',
                required: false,
                widget: 'boolean'
              },
              {
                label: 'Apenas em desktops',
                name: 'desktopOnly',
                hint: 'Desativa o widget em dispositivos móveis',
                required: false,
                widget: 'boolean'
              },
              {
                label: 'Opções',
                name: 'options',
                widget: 'object',
                hint: 'Personalizações do widget',
                fields: [
                  {
                    label: 'Propriedades',
                    name: 'props',
                    widget: 'object',
                    hint: '',
                    fields: [
                      {
                        label: 'Texto de comprar',
                        name: 'buyText',
                        required: false,
                        widget: 'string'
                      }
                    ]
                  },
                  {
                    label: 'Customização',
                    name: 'slots',
                    widget: 'object',
                    hint: '',
                    fields: [
                      {
                        label: 'Código HTML para comprar',
                        name: 'buy',
                        required: false,
                        widget: 'string'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            label: 'Produtos',
            name: 'ecomplus_widget_product',
            file: 'content/widgets/ecomplus-widget-product.json',
            fields: [
              {
                name: 'pkg',
                widget: 'hidden',
                default: '@ecomplus/widget-product'
              },
              {
                label: 'Ativar',
                hint: 'Produto a ser exibido na página de produto',
                name: 'active',
                required: false,
                widget: 'boolean'
              },
              {
                label: 'Apenas em desktops',
                name: 'desktopOnly',
                hint: 'Desativa o widget em dispositivos móveis',
                required: false,
                widget: 'boolean'
              },
              {
                label: 'Opções',
                name: 'options',
                widget: 'object',
                hint: 'Personalizações do widget',
                fields: [
                  {
                    label: 'Propriedades',
                    name: 'props',
                    widget: 'object',
                    hint: '',
                    fields: [
                      {
                        label: 'Texto de comprar',
                        name: 'buyText',
                        required: false,
                        widget: 'string'
                      }
                    ]
                  },
                  {
                    label: 'Customização',
                    name: 'slots',
                    widget: 'object',
                    hint: '',
                    fields: [
                      {
                        label: 'Código HTML para comprar',
                        name: 'buy',
                        required: false,
                        widget: 'string'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}

export default config
