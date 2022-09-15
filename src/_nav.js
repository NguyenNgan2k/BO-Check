export const navItems = [
    {
        name: 'Trang chủ',
        url: '/dashboard',
        icon: 'dashboard',
        right: ['All']
    },
    {
        name: 'Khách hàng',
        url: '/customer',
        icon: 'customer',
        right: ['All']
    },
    {
        name: 'Tài khoản',
        url: '/account',
        icon: 'account',
        right: ['All'],
        children: [
            {
                name: '1. Phí giao dich',
                url: 'phi-giao-dich',
                right: ['All']
            },
            {
                name: '2. Hợp đồng margin',
                url: 'hd-margin',
                right: ['All'],
            },
            {
                name: '3. Tài khoản',
                url: 'tai-khoan',
                right: ['All'],
                children: [
                    {
                        name: 'Thông tin tài khoản',
                        url: 'account-information',
                        right: ['All'],
                    },
                    {
                        name: 'Đăng ký tài khoản',
                        url: 'register-account',
                        right: ['All'],
                    }
                ]
            },
        ]
    },
    {
        name: 'Nghiệp vụ tiền',
        url: '/cash',
        icon: 'cash',
        right: ['All']
    },
    {
        name: 'Nghiệp vụ chứng khoán',
        url: '/stock',
        icon: 'stock',
        right: ['All']
    },
];