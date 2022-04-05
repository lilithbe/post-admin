export const menu = [
    {
        label: 'Home',
        items: [{
            label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/post-admin/'
        }]
    },
    {
        label: 'UI Components', icon: 'pi pi-fw pi-sitemap',
        items: [
            { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/post-admin/formlayout' },
            { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/post-admin/input' },
            { label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel" },
            { label: "Invalid State", icon: "pi pi-fw pi-exclamation-circle", to: "invalidstate" },
            { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/post-admin/button' },
            { label: 'Table', icon: 'pi pi-fw pi-table', to: '/post-admin/table' },
            { label: 'List', icon: 'pi pi-fw pi-list', to: '/post-admin/list' },
            { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/post-admin/tree' },
            { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/post-admin/panel' },
            { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/post-admin/overlay' },
            { label: "Media", icon: "pi pi-fw pi-image", to: "/media" },
            { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/post-admin/menu' },
            { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/post-admin/messages' },
            { label: 'File', icon: 'pi pi-fw pi-file', to: '/post-admin/file' },
            { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/post-admin/chart' },
            { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/post-admin/misc' },
        ]
    },
    {
        label: 'UI Blocks',
        items: [
            { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/post-admin/blocks', badge: "NEW" },
            { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-react' }
        ]
    },
    {
        label: 'Icons',
        items: [
            { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', to: '/post-admin/icons' }
        ]
    },
    {
        label: 'Pages', icon: 'pi pi-fw pi-clone',
        items: [
            { label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/post-admin/crud' },
            { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/post-admin/timeline' },
            { label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: '/post-admin/empty' }
        ]
    },
    {
        label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
        items: [
            {
                label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                        ]
                    },
                    {
                        label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    },
                ]
            },
            {
                label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' },
                        ]
                    },
                    {
                        label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: 'Get Started',
        items: [
            { label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => { window.location = "#/documentation" } },
            { label: 'View Source', icon: 'pi pi-fw pi-search', command: () => { window.location = "https://github.com/primefaces/sakai-react" } }
        ]
    }
];