// Khởi tạo bộ nhớ lưu trữ câu hỏi trắc nghiệm trực tuyến
window.quizData = window.quizData || {};

// Toàn bộ cơ sở dữ liệu học liệu của hệ thống Iris Math
const database = {
    // =========================================================================
    // 1. TOÁN CHƯƠNG TRÌNH VIỆT NAM (LỚP 6 - LỚP 12 & ÔN THI)
    // =========================================================================
    vn: [
        {
            id: 'v6',
            name: 'Toán Lớp 6',
            subjects: [
                { 
                    title: 'Chương 1: Số tự nhiên', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 1', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'v6-c1-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 2: Tính chia hết trong tập hợp các số tự nhiên', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 2', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 2', type: 'full_exam', testId: 'v6-c2-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 3: Số nguyên', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 3', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 3', type: 'full_exam', testId: 'v6-c3-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 4: Phân số', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 4', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 4', type: 'full_exam', testId: 'v6-c4-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 5: Số thập phân', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 5', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 5', type: 'full_exam', testId: 'v6-c5-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 6: Hình học trực quan', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 6', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 6', type: 'full_exam', testId: 'v6-c6-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 7: Hình học phẳng cơ bản', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 7', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 7', type: 'full_exam', testId: 'v6-c7-lt1', solutionLink: '#' }] }
                    ] 
                }
            ]
        },
        {
            id: 'v7',
            name: 'Toán Lớp 7',
            subjects: [
                { 
                    title: 'Chương 1: Số hữu tỉ', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 1', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'v7-c1-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 2: Số thực', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 2', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 2', type: 'full_exam', testId: 'v7-c2-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 3: Hình học trực quan (Khối đa diện)', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 3', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 3', type: 'full_exam', testId: 'v7-c3-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 4: Góc và đường thẳng song song', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 4', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 4', type: 'full_exam', testId: 'v7-c4-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 5: Các hình khối trong thực tiễn', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 5', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 5', type: 'full_exam', testId: 'v7-c5-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 6: Biểu thức đại số và đa thức một biến', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 6', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 6', type: 'full_exam', testId: 'v7-c6-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 7: Tam giác bằng nhau', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 7', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 7', type: 'full_exam', testId: 'v7-c7-lt1', solutionLink: '#' }] }
                    ] 
                }
            ]
        },
        {
            id: 'v8',
            name: 'Toán Lớp 8',
            subjects: [
                { 
                    title: 'Chương 1: Đa thức', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 1', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'v8-c1-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 2: Phân thức đại số', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 2', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 2', type: 'full_exam', testId: 'v8-c2-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 3: Hàm số và đồ thị', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 3', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 3', type: 'full_exam', testId: 'v8-c3-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 4: Định lí Pythagore và Các hình khối trong thực tiễn', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 4', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 4', type: 'full_exam', testId: 'v8-c4-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 5: Tứ giác', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 5', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 5', type: 'full_exam', testId: 'v8-c5-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 6: Định lí Thales', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 6', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 6', type: 'full_exam', testId: 'v8-c6-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 7: Tam giác đồng dạng', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 7', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 7', type: 'full_exam', testId: 'v8-c7-lt1', solutionLink: '#' }] }
                    ] 
                }
            ]
        },
        {
            id: 'v9',
            name: 'Toán Lớp 9',
            subjects: [
                { 
                    title: 'Chương 1: Phương trình và hệ phương trình bậc nhất', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 1', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'v9-c1-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 2: Phương trình bậc hai một ẩn số', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 2', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 2', type: 'full_exam', testId: 'v9-c2-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 3: Hàm số y = ax^2 và Đồ thị', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 3', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 3', type: 'full_exam', testId: 'v9-c3-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 4: Hệ thức lượng trong tam giác vuông', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 4', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 4', type: 'full_exam', testId: 'v9-c4-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 5: Đường tròn', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 5', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 5', type: 'full_exam', testId: 'v9-c5-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 6: Hình trụ - Hình nón - Hình cầu', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 6', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 6', type: 'full_exam', testId: 'v9-c6-lt1', solutionLink: '#' }] }
                    ] 
                }
            ]
        },
        {
            id: 'v10',
            name: 'Toán Lớp 10',
            subjects: [
                { 
                    title: 'Chương 1: Mệnh đề và Tập hợp', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 1', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'v10-c1-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 2: Bất phương trình và Hệ bất phương trình bậc nhất hai ẩn', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 2', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 2', type: 'full_exam', testId: 'v10-c2-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 3: Hàm số và Đồ thị', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 3', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 3', type: 'full_exam', testId: 'v10-c3-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 4: Hệ thức lượng trong tam giác', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 4', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 4', type: 'full_exam', testId: 'v10-c4-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 5: Vector và các phép toán', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 5', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 5', type: 'full_exam', testId: 'v10-c5-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 6: Thống kê và Xác suất cơ bản', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 6', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 6', type: 'full_exam', testId: 'v10-c6-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 7: Phương pháp tọa độ trong mặt phẳng (Oxy)', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 7', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 7', type: 'full_exam', testId: 'v10-c7-lt1', solutionLink: '#' }] }
                    ] 
                }
            ]
        },
        {
            id: 'v11',
            name: 'Toán Lớp 11',
            subjects: [
                { 
                    title: 'Chương 1: Hàm số lượng giác và Phương trình lượng giác', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 1', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'v11-c1-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 2: Dãy số. Cấp số cộng. Cấp số nhân', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 2', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 2', type: 'full_exam', testId: 'v11-c2-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 3: Giới hạn. Hàm số liên tục', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 3', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 3', type: 'full_exam', testId: 'v11-c3-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 4: Đường thẳng và Mặt phẳng trong không gian', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 4', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 4', type: 'full_exam', testId: 'v11-c4-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 5: Quan hệ vuông góc trong không gian', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 5', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 5', type: 'full_exam', testId: 'v11-c5-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 6: Hàm số mũ và Hàm số lôgarit', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 6', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 6', type: 'full_exam', testId: 'v11-c6-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 7: Đạo hàm', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [{ name: 'Bài giảng lý thuyết Chương 7', type: 'pdf', link: '#' }] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 7', type: 'full_exam', testId: 'v11-c7-lt1', solutionLink: '#' }] }
                    ] 
                }
            ]
        },
        { 
            id: 'v12', 
            name: 'Toán Lớp 12', 
            subjects: [
                { 
                    title: 'Chương 1: Ứng dụng đạo hàm để khảo sát hàm số', 
                    resources: [
                        {
                            name: '📚 Bài giảng lý thuyết và thực hành',
                            type: 'group',
                            items: [
                                { name: 'Chuyên đề 1: Tính đơn điệu của hàm số', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 2: Cực trị của hàm số', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 3: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 4: Đường tiệm cận của đồ thị hàm số', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 5: Khảo sát sự biến thiên và vẽ đồ thị hàm số', type: 'pdf', link: '#' }
                            ]
                        },
                        {
                            name: '📝 Đề luyện tập tổng hợp',
                            type: 'group',
                            items: [
                                { name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'v12-c1-lt1', solutionLink: '#' },
                                { name: 'Đề luyện tập số 2', type: 'full_exam', testId: 'v12-c1-lt2', solutionLink: '#' }
                            ]
                        }
                    ] 
                },
                { 
                    title: 'Chương 2: Nguyên hàm và Tích phân', 
                    resources: [
                        {
                            name: '📚 Bài giảng lý thuyết và thực hành',
                            type: 'group',
                            items: [
                                { name: 'Chuyên đề 1: Nguyên hàm và các tính chất', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 2: Các phương pháp tìm nguyên hàm', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 3: Tích phân và các tính chất cơ bản', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 4: Phương pháp tính tích phân (Đổi biến & Từng phần)', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 5: Ứng dụng hình học của tích phân (Diện tích & Thể tích)', type: 'pdf', link: '#' }
                            ]
                        },
                        {
                            name: '📝 Đề luyện tập tổng hợp',
                            type: 'group',
                            items: [
                                { name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'v12-c2-lt1', solutionLink: '#' },
                                { name: 'Đề luyện tập số 2', type: 'full_exam', testId: 'v12-c2-lt2', solutionLink: '#' }
                            ]
                        }
                    ] 
                },
                { 
                    title: 'Chương 3: Phương pháp tọa độ trong không gian (Oxyz)', 
                    resources: [
                        {
                            name: '📚 Bài giảng lý thuyết và thực hành',
                            type: 'group',
                            items: [
                                { name: 'Chuyên đề 1: Hệ tọa độ Oxyz và tọa độ Vector', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 2: Biểu thức tọa độ của các phép toán vector', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 3: Phương trình mặt phẳng', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 4: Phương trình đường thẳng trong không gian', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 5: Phương trình mặt cầu', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 6: Bài toán góc và khoảng cách', type: 'pdf', link: '#' }
                            ]
                        },
                        {
                            name: '📝 Đề luyện tập tổng hợp',
                            type: 'group',
                            items: [
                                { name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'v12-c3-lt1', solutionLink: '#' },
                                { name: 'Đề luyện tập số 2', type: 'full_exam', testId: 'v12-c3-lt2', solutionLink: '#' }
                            ]
                        }
                    ] 
                },
                { 
                    title: 'Chương 4: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm', 
                    resources: [
                        {
                            name: '📚 Bài giảng lý thuyết và thực hành',
                            type: 'group',
                            items: [
                                { name: 'Chuyên đề 1: Giới thiệu về mẫu số liệu ghép nhóm', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 2: Số trung bình cộng và Trung vị', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 3: Tứ phân vị và Mốt của mẫu ghép nhóm', type: 'pdf', link: '#' }
                            ]
                        },
                        {
                            name: '📝 Đề luyện tập tổng hợp',
                            type: 'group',
                            items: [
                                { name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'v12-c4-lt1', solutionLink: '#' },
                                { name: 'Đề luyện tập số 2', type: 'full_exam', testId: 'v12-c4-lt2', solutionLink: '#' }
                            ]
                        }
                    ] 
                },
                { 
                    title: 'Chương 5: Xác suất có điều kiện và công thức xác suất toàn phần', 
                    resources: [
                        {
                            name: '📚 Bài giảng lý thuyết và thực hành',
                            type: 'group',
                            items: [
                                { name: 'Chuyên đề 1: Khái niệm Xác suất có điều kiện', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 2: Công thức nhân xác suất và sơ đồ cây', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 3: Công thức xác suất toàn phần', type: 'pdf', link: '#' },
                                { name: 'Chuyên đề 4: Công thức Bayes', type: 'pdf', link: '#' }
                            ]
                        },
                        {
                            name: '📝 Đề luyện tập tổng hợp',
                            type: 'group',
                            items: [
                                { name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'v12-c5-lt1', solutionLink: '#' },
                                { name: 'Đề luyện tập số 2', type: 'full_exam', testId: 'v12-c5-lt2', solutionLink: '#' }
                            ]
                        }
                    ] 
                },
                {
                    title: '🎯 Khóa ôn thi tốt nghiệp THPTQG 2026',
                    resources: [
                        {
                            name: 'Đề ôn thi số 14',
                            type: 'group',
                            items: [
                                { name: 'Làm đề thi trực tuyến (Cấu trúc 2025)', type: 'full_exam', testId: 'on-tn-de-14-2612', solutionLink: 'https://drive.google.com/open?id=1NOL0kUO4FvWiawiKwwfZMRhod3LwK4cN&usp=drive_fs' }
                            ]
                        },
                        {
                            name: 'Đề ôn thi số 15',
                            type: 'group',
                            items: [
                                { name: 'Làm đề thi trực tuyến (Cấu trúc 2025)', type: 'full_exam', testId: 'on-tn-de-15-2612', solutionLink: 'https://drive.google.com/open?id=1GHZ0czGq2NBQRjYePVAfXOX8Q3xYKeez&usp=drive_fs' }
                            ]
                        },
                        {
                            name: 'Đề ôn thi số 16',
                            type: 'group',
                            items: [
                                { name: 'Làm đề thi trực tuyến (Cấu trúc 2025)', type: 'full_exam', testId: 'on-tn-de-16-2612', solutionLink: '#' }
                            ]
                        },
                        {
                            name: 'Đề ôn thi số 17',
                            type: 'group',
                            items: [
                                { name: 'Làm đề thi trực tuyến (Cấu trúc 2025)', type: 'full_exam', testId: 'on-tn-de-17-2612', solutionLink: '#' }
                            ]
                        },
                        {
                            name: 'Đề ôn thi số 18',
                            type: 'group',
                            items: [
                                { name: 'Làm đề thi trực tuyến (Cấu trúc 2025)', type: 'full_exam', testId: 'on-tn-de-18-2612', solutionLink: '#' }
                            ]
                        },
                        {
                            name: 'Đề ôn thi số 19',
                            type: 'group',
                            items: [
                                { name: 'Làm đề thi trực tuyến (Cấu trúc 2025)', type: 'full_exam', testId: 'on-tn-de-19-2612', solutionLink: '#' }
                            ]
                        },
                        {
                            name: 'Đề ôn thi số 20',
                            type: 'group',
                            items: [
                                { name: 'Làm đề thi trực tuyến (Cấu trúc 2025)', type: 'full_exam', testId: 'd20', solutionLink: '#' }
                            ]
                        }
                    ]
                }
            ] 
        }
    ],

    // =========================================================================
    // 2. TOÁN TIẾNG ANH (VIETNAMESE MATHEMATICS CURRICULUM IN ENGLISH)
    // =========================================================================
    en: [
        {
            id: 'e6',
            name: 'Grade 6',
            subjects: [
                { title: 'Chapter 1: Natural Numbers', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e6-c1-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 2: Divisibility in Natural Numbers', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e6-c2-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 3: Integers', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e6-c3-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 4: Fractions', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e6-c4-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 5: Decimals', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e6-c5-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 6: Visual Geometry', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e6-c6-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 7: Basic Planar Geometry', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e6-c7-lt1', solutionLink: '#' }] } ] }
            ]
        },
        {
            id: 'e7',
            name: 'Grade 7',
            subjects: [
                { title: 'Chapter 1: Rational Numbers', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e7-c1-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 2: Real Numbers', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e7-c2-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 3: Spatial Geometry - Polyhedrons', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e7-c3-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 4: Angles and Parallel Lines', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e7-c4-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 5: Algebraic Expressions and Polynomials', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e7-c5-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 6: Congruent Triangles', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e7-c6-lt1', solutionLink: '#' }] } ] }
            ]
        },
        {
            id: 'e8',
            name: 'Grade 8',
            subjects: [
                { title: 'Chapter 1: Polynomials', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e8-c1-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 2: Algebraic Fractions', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e8-c2-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 3: Functions and Graphs', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e8-c3-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 4: Pythagorean Theorem & Spatial Figures', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e8-c4-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 5: Quadrilaterals', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e8-c5-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 6: Thales\' Theorem', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e8-c6-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 7: Similar Triangles', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e8-c7-lt1', solutionLink: '#' }] } ] }
            ]
        },
        {
            id: 'e9',
            name: 'Grade 9',
            subjects: [
                { title: 'Chapter 1: Equations and Systems of Linear Equations', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e9-c1-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 2: Quadratic Equations', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e9-c2-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 3: Functions y = ax^2 and Graphs', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e9-c3-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 4: Right Triangle Trigonometry', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e9-c4-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 5: Circles', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e9-c5-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 6: Cylinders, Cones, Spheres', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e9-c6-lt1', solutionLink: '#' }] } ] }
            ]
        },
        {
            id: 'e10',
            name: 'Grade 10',
            subjects: [
                { title: 'Chapter 1: Propositions and Sets', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e10-c1-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 2: Linear Inequalities and Systems', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e10-c2-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 3: Functions and Graphs', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e10-c3-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 4: Relations in Triangles', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e10-c4-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 5: Vectors and Operations', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e10-c5-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 6: Coordinate Method in Planar Geometry', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e10-c6-lt1', solutionLink: '#' }] } ] }
            ]
        },
        {
            id: 'e11',
            name: 'Grade 11',
            subjects: [
                { title: 'Chapter 1: Trigonometric Functions and Equations', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e11-c1-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 2: Sequences, Arithmetic & Geometric Progressions', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e11-c2-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 3: Limits and Continuous Functions', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e11-c3-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 4: Lines and Planes in Space', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e11-c4-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 5: Perpendicularity in Space', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e11-c5-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 6: Exponential and Logarithmic Functions', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e11-c6-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 7: Derivatives', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e11-c7-lt1', solutionLink: '#' }] } ] }
            ]
        },
        {
            id: 'e12',
            name: 'Grade 12',
            subjects: [
                { title: 'Chapter 1: Applications of Derivatives', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e12-c1-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 2: Primitives and Integrals', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e12-c2-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 3: Coordinate Method in Space', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e12-c3-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 4: Grouped Data Statistics', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e12-c4-lt1', solutionLink: '#' }] } ] },
                { title: 'Chapter 5: Conditional & Total Probability', resources: [ { name: '📚 Lectures', type: 'group', items: [] }, { name: '📝 Exercises', type: 'group', items: [{ name: 'Practice Test 1', type: 'full_exam', testId: 'e12-c5-lt1', solutionLink: '#' }] } ] }
            ]
        }
    ],

    // =========================================================================
    // 3. TOÁN ĐẠI HỌC (HIGHER MATHEMATICS)
    // =========================================================================
    uni: [
        // 3.1. GIẢI TÍCH (CALCULUS)
        {
            id: 'u_calculus',
            name: 'Giải tích (Calculus)',
            subjects: [
                { 
                    title: 'Giải tích 1: Hàm một biến, Giới hạn, Đạo hàm & Tích phân', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-cal1-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Giải tích 2: Hàm nhiều biến & Tích phân bội', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-cal2-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Giải tích 3: Chuỗi số, Chuỗi hàm & Phương trình vi phân', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-cal3-lt1', solutionLink: '#' }] }
                    ] 
                }
            ]
        },
        // 3.2. ĐẠI SỐ TUYẾN TÍNH (LINEAR ALGEBRA)
        {
            id: 'u_algebra',
            name: 'Đại số tuyến tính (Linear Algebra)',
            subjects: [
                { 
                    title: 'Chương 1: Ma trận và Định thức', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-alg1-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 2: Hệ phương trình đại số tuyến tính', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-alg2-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 3: Không gian Vector', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-alg3-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 4: Ánh xạ tuyến tính', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-alg4-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 5: Dạng toàn phương, Trị riêng và Vector riêng', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-alg5-lt1', solutionLink: '#' }] }
                    ] 
                }
            ]
        },
        // 3.3. XÁC SUẤT THỐNG KÊ (PROBABILITY & STATISTICS)
        {
            id: 'u_probability',
            name: 'Xác suất thống kê (Probability & Statistics)',
            subjects: [
                { 
                    title: 'Chương 1: Biến cố ngẫu nhiên và Xác suất', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-prob1-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 2: Đại lượng ngẫu nhiên và Luật phân phối xác suất', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-prob2-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 3: Lý thuyết mẫu và Ước lượng tham số', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-prob3-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 4: Kiểm định giả thuyết thống kê', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-prob4-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 5: Tương quan và Hồi quy tuyến tính', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-prob5-lt1', solutionLink: '#' }] }
                    ] 
                }
            ]
        },
        // 3.4. TOÁN RỜI RẠC (DISCRETE MATHEMATICS)
        {
            id: 'u_discrete',
            name: 'Toán rời rạc (Discrete Mathematics)',
            subjects: [
                { 
                    title: 'Chương 1: Logic mệnh đề và Tập hợp', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-disc1-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 2: Đại số Boole và Mạch logic', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-disc2-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 3: Lý thuyết tổ hợp và Đếm', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-disc3-lt1', solutionLink: '#' }] }
                    ] 
                },
                { 
                    title: 'Chương 4: Lý thuyết đồ thị (Graphs) và Cây (Trees)', 
                    resources: [
                        { name: '📚 Bài giảng lý thuyết và thực hành', type: 'group', items: [] },
                        { name: '📝 Đề luyện tập tổng hợp', type: 'group', items: [{ name: 'Đề luyện tập số 1', type: 'full_exam', testId: 'uni-disc4-lt1', solutionLink: '#' }] }
                    ] 
                }
            ]
        }
    ]
};