// Khởi tạo bộ nhớ lưu trữ câu hỏi
window.quizData = window.quizData || {};

// Toàn bộ dữ liệu học liệu của hệ thống
const database = {
    vn: [
        { id: 'v10', name: 'Toán Lớp 10', subjects: [] },
        { id: 'v11', name: 'Toán Lớp 11', subjects: [] },
        { 
            id: 'v12', 
            name: 'Toán Lớp 12', 
            subjects: [
                {
                    title: 'Chương 7: Đề ôn thi tốt nghiệp THPTQG 2026',
                    resources: [
                        {
                            name: 'Đề ôn thi số 14',
                            type: 'group',
                            items: [
                                // GỘP THÀNH 1 MỤC DUY NHẤT
                                { 
                                    name: 'Làm đề thi trực tuyến (Cấu trúc 2025)', 
                                    type: 'full_exam', 
                                    testId: 'd14', 
                                    solutionLink: 'https://drive.google.com/open?id=1NOL0kUO4FvWiawiKwwfZMRhod3LwK4cN&usp=drive_fs' 
                                }
                            ]
                        }
                    ]
                }
            ] 
        }
    ],
    en: [], uni: []
};