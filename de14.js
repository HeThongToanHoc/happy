// DỮ LIỆU ĐỀ 14
window.quizData['d14_p1'] = [
    {
        q: "Họ các nguyên hàm của hàm số $f(x)=x^{2}-3x+\\dfrac{1}{x}$ là",
        options: [
            "$F(x)=\\dfrac{x^{3}}{3}+\\dfrac{3}{2}x^{2}+\\ln x+C.$",
            "$F(x)=\\dfrac{x^{3}}{3}-\\dfrac{3}{2}x^{2}+\\ln x+C.$",
            "$F(x)=2x-3-\\dfrac{1}{x^{2}}+C.$",
            "$F(x)=\\dfrac{x^{3}}{3}-\\dfrac{3}{2}x^{2}+\\ln |x|+C.$"
        ],
        answer: 3
    },
    {
        q: "Tích phân $\\int_{0}^{2}\\dfrac{2}{2x+1}dx$ bằng",
        options: ["$2 \\ln 5.$", "$\\dfrac{1}{2}\\ln 5$.", "$\\ln 5.$", "$4 \\ln 5.$"],
        answer: 2
    },
    {
        q: "Cho hàm số $y=f(x)$ có bảng biến thiên. Tổng các giá trị nguyên của m để đường thẳng $y=m-1$ cắt đồ thị hàm số $y=f(x)$ tại ba điểm phân biệt bằng",
		image:"images/de14/d14-TN-1.png",
		options: ["6.", "1.", "0.", "3."],
        answer: 2
    },
    {
        q: "Tìm tập nghiệm của bất phương trình $\\log_{\\dfrac{2}{5}}(x-4)+1>0.$",
        options: ["$(-\\infty;\\dfrac{13}{2})$", "$(4;\\dfrac{13}{2})$", "$[\\dfrac{13}{2};+\\infty)$", "$(4;+\\infty)$"],
        answer: 1
    },
    {
        q: "Giá trị lớn nhất của hàm số $f(x)=x^{3}-8x^{2}+16x-9$ trên đoạn [1;3] là",
        options: [
            "$\\max_{[1;3]}f(x)=0.$",
            "$\\max_{[1;3]}f(x)=\\dfrac{13}{27}.$",
            "$\\max_{[1;3]}f(x)=-6.$",
            "$\\max_{[1;3]}f(x)=5$"
        ],
        answer: 1
    },
    {
        q: "Trong không gian với hệ tọa độ Oxyz, cho đường thẳng $d: \\dfrac{x-2}{-3}=\\dfrac{y}{1}=\\dfrac{z+1}{2}$. Gọi M là giao điểm của $d$ với mặt phẳng (P): $x + 2y - 3z + 2 = 0$. Tọa độ điểm M là",
        options: ["$M(2;0;-1)$", "$M(5;-1;-3)$", "$M(1;0;1)$", "$M(-1;1;1)$"],
        answer: 3
    },
    {
        q: "Cho cấp số cộng $(u_n)$ với số hạng đầu $u_{1}=-6$ và công sai $d=4$. Tính tổng S của 14 số hạng đầu tiên của cấp số cộng đó.",
        options: ["$S=46.$", "$S=308.$", "$S=644.$", "$S=280.$"],
        answer: 3
    },
    {
        q: "Tính thể tích của khối tứ diện đều có cạnh bằng 2.",
        options: ["$\\sqrt{2}.$", "$\\dfrac{4\\sqrt{2}}{3}.$", "$\\dfrac{2\\sqrt{2}}{3}.$", "$2\\sqrt{2}.$"],
        answer: 2
    },
    {
        q: "Khối lượng các túi đường được đóng gói (đơn vị là kg) được thống kê ở bảng số liệu ghép nhóm. Phương sai của mẫu số liệu gần nhất với kết quả nào sau đây?",
        options: ["0,04.", "0,03.", "0,05.", "0,055."],
        answer: 0
    },
    {
        q: "Cho hàm số $y=f(x)$ có bảng biến thiên. Tổng số đường tiệm cận (bao gồm tiệm cận đứng và tiệm cận ngang) của đồ thị hàm số là",
        image:"images/de14/d14-TN-2.png",
		options: ["0.", "3.", "2.", "1."],
        answer: 2
    },
    {
        q: "Trong không gian với hệ tọa độ Oxyz, trong các mặt cầu dưới đây, mặt cầu nào có bán kính R = 2?",
        options: [
            "$(S): x^{2}+y^{2}+z^{2}-4x+2y+2z-3=0.$",
            "$(S): x^{2}+y^{2}+z^{2}-4x+2y+2z-10=0.$",
            "$(S): x^{2}+y^{2}+z^{2}-4x+2y+2z+2=0.$",
            "$(S): x^{2}+y^{2}+z^{2}-4x+2y+2z+5=0.$"
        ],
        answer: 2
    },
    {
        q: "Cho đồ thị hàm số $y=f(x)$. Diện tích S của hình phẳng (phần tô đậm trong hình vẽ) giới hạn bởi đồ thị và trục hoành từ 0 đến 3 là",
		image:"images/de14/d14-TN-3.png",
		options: [
            "$S=-\\int_{0}^{1}f(x)dx+\\int_{1}^{3}f(x)dx.$",
            "$S=\\int_{0}^{1}f(x)dx-\\int_{1}^{3}f(x)dx.$",
            "$S=\\int_{0}^{3}f(x)dx.$",
            "$S=\\int_{0}^{1}f(x)dx+\\int_{1}^{3}f(x)dx.$"
        ],
        answer: 1
    }
];

window.quizData['d14_p2'] = [
    {
        q: "Cho hàm số $y=x^{2}-4 \\ln(1-x)$. Xét tính đúng sai của các mệnh đề sau:",
        sub_questions: [
            { text: "a) Tập xác định của hàm số là $D=(1;+\\infty)$.", correct: false },
            { text: "b) Đạo hàm của hàm số là $y&#39;=\\dfrac{-2x^{2}+2x+4}{1-x}$.", correct: true },
            { text: "c) Giá trị lớn nhất của hàm số trên [-2;0] bằng $4-4 \\ln 3$.", correct: false },
            { text: "d) Đồ thị hàm số cắt trục Ox tại 2 điểm mà khoảng cách của chúng lớn hơn 2.", correct: true }
        ]
    },
    {
        q: "Cho hình chóp S.ABCD có đáy ABCD là hình chữ nhật, $AB=a, AD=2a$. Cạnh bên $SA \\perp (ABCD)$ và $SA=a\\sqrt{2}$. Gọi M là hình chiếu vuông góc của A lên SD. Xét tính đúng sai:",
        image:"images/de14/d14-DS-1.png",
		sub_questions: [
            { text: "a) Khoảng cách từ điểm M đến mặt phẳng (SAC) lớn hơn $\\dfrac{a}{2}$.", correct: false },
            { text: "b) Tan của góc giữa hai mặt phẳng (SAC) và (SBC) bằng $\\dfrac{\\sqrt{10}}{2}$.", correct: false },
            { text: "c) Khoảng cách giữa hai đường thẳng DB và SC bằng $\\dfrac{2a\\sqrt{3}}{3}$.", correct: false },
            { text: "d) Thể tích khối chóp S.OCD là $\\dfrac{a^{3}\\sqrt{2}}{6}$.", correct: true }
        ]
    },
    {
        q: "Thống kê dân số thành phố gồm 3 nhóm: Văn phòng (20% dân số, 15% hút thuốc), Công nhân (50% dân số, 30% hút thuốc), Nghỉ hưu (30% dân số, 10% hút thuốc). Biết 40% người hút thuốc và 5% người không hút thuốc bị ho mãn tính. Xét tính đúng sai:",
        image:"images/de14/d14-DS-2.png",
		sub_questions: [
            { text: "a) Xác suất để chọn được người hút thuốc bằng 0,21.", correct: true },
            { text: "b) Xác suất để gặp một người không ho mãn tính bằng 0,95 biết họ không hút thuốc.", correct: true },
            { text: "c) Xác suất chọn được người vừa hút thuốc vừa bị ho mãn tính bằng 0,08.", correct: false },
            { text: "d) Nếu chọn được người hút thuốc và bị ho mãn tính, xác suất người đó là nhân viên văn phòng hoặc công nhân bằng $\\dfrac{5}{7}$.", correct: false }
        ]
    },
    {
        q: "Một cái trứng khủng long đồ chơi tạo bởi: mảnh trên xoay 1/4 elip (trục 8cm và 4cm) quanh Ox, mảnh dưới xoay 1/4 đường tròn (R=2cm) quanh Ox. Xét tính đúng sai:",
        image:"images/de14/d14-DS-3.png",
		sub_questions: [
            { text: "a) Thể tích phần trong của mảnh trên là $V_{1}=\\dfrac{\\pi}{4}\\int_{-4}^{0}(16-x^{2})dx$.", correct: true },
            { text: "b) Thể tích mảnh trên gấp 2 lần thể tích mảnh dưới.", correct: true },
            { text: "c) Thể tích phần trong của quả trứng này là $16\\pi$.", correct: true },
            { text: "d) Diện tích thiết diện khi cắt bởi mặt phẳng qua trục của quả trứng là $5\\pi$.", correct: false }
        ]
    }
];

window.quizData['d14_p3'] = [
    {
        q: "Khi nghiên cứu dịch sốt xuất huyết ở một địa phương, các chuyên gia y tế ước tính rằng tại ngày thứ $m$ có $F(m)$ người mắc bệnh (sau khi đã làm tròn đến chữ số hàng đơn vị). Biết rằng tốc độ lan truyền bệnh là $F'(m)=\\dfrac{150}{2m+1}$ và ngày đầu tiên ($m=0$) người ta phát hiện ra $50$ bệnh nhân. Hãy xác định biểu thức của $F(m)$ và số người mắc bệnh ở ngày thứ $10$ (làm tròn đến hàng đơn vị).",
        answer: "278"
    },
    {
        q: "Một vật dao động điều hòa xung quanh vị trí cân bằng theo phương trình $x=2 \\cos \\left(5 t-\\dfrac{\\pi}{6}\\right)$. Ở đây, thời gian $t$ tính bằng giây và quãng đường $x$ tính bằng centimét. Hãy cho biết trong khoảng thời gian từ 0 đến 6 giây, vật đi qua vị trí cân bẳng bao nhiêu lần?",
        image:"images/de14/d14-TLN-1.png",
		answer: "9"
    },
    {
        q: "Một phần đường chạy của tàu lượn siêu tốc khi gắn với hệ trục tọa độ $Oxy$ được mô phỏng ở hình sau. Biết đường chạy của nó có dạng đồ thị hàm số bậc ba $y=ax^3+bx^2+cx+d$ ($0 \\leq x \\leq 90$). Tàu lượn xuất phát từ điểm $A$ đồng thời đi qua các điểm $B$, $C$, $D$ (như hình vẽ). Lấy đơn vị trên mỗi trục là mét và trục $Ox$ nằm trên mặt đất, hãy tính độ cao lớn nhất mà tàu lượn siêu tốc đạt được so với mặt đất (làm tròn kết quả đến hàng phần chục).",
        image:"images/de14/d14-TLN-2.png",
		answer: "39.9"
    },
    {
        q: "Từ một hình vuông có cạnh 8 dm , bạn Xuân Anh vẽ một đường tròn chính giữa với tâm đường tròn trùng tâm hình vuông. Sau đó bạn vẽ hai parabol đối xứng nhau qua tâm đường tròn, đồng thời tiếp xúc với đường tròn và đi qua cặp đỉnh tương ứng của hình vuông ban đầu (tham khảo hình vẽ); cuối cùng bạn vẽ thêm hai hình chữ nhật đối xứng nhau qua tâm đường tròn, mỗi hình có một cạnh thuộc cạnh hình vuông ban đầu, hai đỉnh không thuộc cạnh đó nằm trên hai parabol khác nhau và thuộc cạnh tiếp xúc đường tròn trung tâm. Tìm diện tích lớn nhất của phần tô đậm (gồm đường tròn, hai parabol giới hạn và hai hình chữ nhật) và làm tròn đến hàng phần mười của $\\mathrm{dm}^2$.",
        image:"images/de14/d14-TLN-3.png",
		answer: "54.2"
    },
    {
        q: "Một người bước vào Casino với số tiền vốn là 3 USD, biết rằng nếu anh ta nhận được lá bài đỏ thì anh thắng 1 USD , nếu anh ta nhận được lá bài đen thì anh sẽ thua 1 USD (mỗi ván người chơi nhận ngẫu nhiên 1 lá bài). Cuộc chơi chỉ dừng lại khi số tiền người chơi về 0 USD hoặc lên đến 15 USD. Tính xác suất để người chơi đạt được 15 USD.",
        answer: "0.2"
    },
    {
        q: "Một cái cốc đựng nước với phần lồng cốc (có thể chứa nước) có dạng hình nón cụt, trong đó đáy bé và đáy lớn lần lượt có bán kính $2,5 \\mathrm{~cm} ; 3 \\mathrm{~cm}$. Khi bỏ 4 viên bi có cùng bán kính bẳng 1 cm tiếp xúc đôi một với nhau ( 3 viên bi nằm ở đáy cốc nâng viên bi còn lại) thì người ta quan sát được mực nước trong cốc đang ngập đến $\\dfrac{3}{4}$ chiều cao viên bi trên cùng. Giả sử viên bi nằm trên cùng vừa chạm (tiếp xúc) với mặt phẳng đi qua miệng cốc, hỏi thể tích của nước đang có trong ly là bao nhiêu ml (làm tròn đến hàng phần chục)?",
        image:"images/de14/d14-TlN-4.png",
		answer: "56.6"
    }
];