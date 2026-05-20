// DỮ LIỆU ĐỀ 8 - THUỘC HỆ THỐNG IRIS MATH
window.quizData = window.quizData || {};

window.quizData['on-tn-de-8-2612_p1'] = [
    {
        q: "Đồ thị hàm số $y=\\dfrac{2x-3}{x-1}$ có đường tiệm cận ngang là",
        options: [
            "$x=-1$",
            "$y=-2$",
            "$x=1$",
            "$y=2$"
        ],
        answer: 3,
        explanation: "Ta lấy giới hạn hàm số tại vô cực: $\\lim\\limits_{x \\to \\pm\\infty} y = \\lim\\limits_{x \\to \\pm\\infty} \\dfrac{2x-3}{x-1} = 2$. Do đó đường thẳng $y=2$ là tiệm cận ngang của đồ thị hàm số."
    },
    {
        q: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1=2$ và công bội $q=-3$. Tính $u_3$.",
        options: [
            "$u_3=18$",
            "$u_3=54$",
            "$u_3=-18$",
            "$u_3=-54$"
        ],
        answer: 0,
        explanation: "Áp dụng công thức số hạng tổng quát của cấp số nhân: $u_3 = u_1 \\cdot q^2 = 2 \\cdot (-3)^2 = 2 \\cdot 9 = 18$."
    },
    {
        q: "Khảo sát thời gian tập thể dục của một số học sinh thu được mẫu số liệu ghép nhóm sau: <br><table border='1' style='border-collapse:collapse; text-align:center; width:100%; max-width:500px; margin:10px auto;'><tr><td>Thời gian (phút)</td><td>$[0;10)$</td><td>$[10;20)$</td><td>$[20;30)$</td><td>$[30;40)$</td><td>$[40;50)$</td><td>$[50;60)$</td></tr><tr><td>Số học sinh</td><td>10</td><td>15</td><td>22</td><td>26</td><td>20</td><td>7</td></tr></table> Tính độ lệch chuẩn của mẫu số liệu ghép nhóm trên (*làm tròn kết quả đến hàng đơn vị*).",
        options: [
            "$12$",
            "$14$",
            "$15$",
            "$13$"
        ],
        answer: 1,
        explanation: "Giá trị đại diện các nhóm lần lượt là 5, 15, 25, 35, 45, 55. Cỡ mẫu $n = 100$.\\nSố trung bình: $\\overline{x} = \\dfrac{10\\cdot5 + 15\\cdot15 + 22\\cdot25 + 26\\cdot35 + 20\\cdot45 + 7\\cdot55}{100} = 30,2$.\\nPhương sai: $s^2 = \\dfrac{1}{100}[10(5-30,2)^2 + \\dots + 7(55-30,2)^2] = 196,96$.\\nĐộ lệch chuẩn: $s = \\sqrt{196,96} \\approx 14$."
    },
    {
        q: "Tập nghiệm của phương trình $\\sin x = \\dfrac{1}{2}$ là",
        options: [
            "$\\left\\{ \\dfrac{\\pi}{3} + k2\\pi; \\dfrac{2\\pi}{3} + k2\\pi \\mid k \\in \\mathbb{Z} \\right\\}$",
            "$\\left\\{ \\dfrac{\\pi}{6} + k\\pi; \\dfrac{5\\pi}{6} + k\\pi \\mid k \\in \\mathbb{Z} \\right\\}$",
            "$\\left\\{ \\dfrac{\\pi}{3} + k\\pi; \\dfrac{2\\pi}{3} + k\\pi \\mid k \\in \\mathbb{Z} \\right\\}$",
            "$\\left\\{ \\dfrac{\\pi}{6} + k2\\pi; \\dfrac{5\\pi}{6} + k2\\pi \\mid k \\in \\mathbb{Z} \\right\\}$"
        ],
        answer: 3,
        explanation: "Ta có $\\sin x = \\dfrac{1}{2} = \\sin \\dfrac{\\pi}{6}\\Leftrightarrow \\left[ \\begin{array}{l} x = \\dfrac{\\pi}{6} + k2\\pi \\\\ x = \\dfrac{5\\pi}{6} + k2\\pi \\end{array} \\right.\\ (k \\in \\mathbb{Z})$."
    },
    {
        q: "Cho tứ diện $OABC$ có $OA$, $OB$, $OC$ đôi một vuông góc và $OA=a$, $OB=2a$, $OC=3a$. Tính khoảng cách từ điểm $B$ đến mặt phẳng $(OAC)$.",
        options: [
            "$a$",
            "$a\\sqrt{6}$",
            "$3a$",
            "$2a$"
        ],
        answer: 3,
        explanation: "Vì $OA$, $OB$, $OC$ đôi một vuông góc nên $OB \\perp OA$ và $OB \\perp OC \\Rightarrow OB \\perp (OAC)$.\\nDo đó, khoảng cách từ $B$ đến mặt phẳng $(OAC)$ chính là độ dài đoạn thẳng $OB = 2a$."
    },
    {
        q: "Tính thể tích khối chóp tam giác đều có cạnh đáy $2a$ và độ dài đường cao $a$.",
        options: [
            "$\\dfrac{a^3\\sqrt{3}}{3}$",
            "$\\dfrac{a^3\\sqrt{3}}{12}$",
            "$\\dfrac{a^3\\sqrt{3}}{4}$",
            "$a^3\\sqrt{3}$"
        ],
        answer: 0,
        explanation: "Diện tích đáy là diện tích tam giác đều cạnh $2a$: $S = \\dfrac{(2a)^2\\sqrt{3}}{4} = a^2\\sqrt{3}$.\\nThể tích khối chóp thu được: $V = \\dfrac{1}{3}Sh = \\dfrac{1}{3} \\cdot a^2\\sqrt{3} \\cdot a = \\dfrac{a^3\\sqrt{3}}{3}$."
    },
    {
        q: "Cho hàm số $y=f(x)=ax^4+bx^3+cx^2+dx+e$ có đạo hàm $f'(x)$ cắt trục hoành tại các điểm có hoành độ $-1, 0, 2$ như hình vẽ. Hỏi hàm số $y=f(x)$ đồng biến trên khoảng nào sau đây?",
        image: "images/2612OnTNDe8/2612OnTNDe8TN7.png",
        options: [
            "$(-\\infty; -1)$",
            "$(1; +\\infty)$",
            "$(0; 2)$",
            "$(-1; 0)$"
        ],
        answer: 3,
        explanation: "Dựa vào đồ thị hàm số đạo hàm $y=f'(x)$, ta thấy $f'(x) > 0$ trên khoảng $(-1; 0)$ và $(2; +\\infty)$. Hàm số đồng biến trên những khoảng có đạo hàm mang dấu dương, do đó hàm số đồng biến trên khoảng $(-1; 0)$."
    },
    {
        q: "Tính đạo hàm của hàm số $y=\\mathrm{e}^x+\\log x$.",
        options: [
            "$y'=\\mathrm{e}^x-\\dfrac{1}{x\\ln 10}$",
            "$y'=\\mathrm{e}^x+\\dfrac{1}{x}$",
            "$y'=\\mathrm{e}^x+\\dfrac{1}{x\\ln 10}$",
            "$y'=\\mathrm{e}^x-\\dfrac{1}{x}$"
        ],
        answer: 2,
        explanation: "Áp dụng công thức tính đạo hàm cơ bản thành phần: $(\\mathrm{e}^x)' = \\mathrm{e}^x$ và $(\\log x)' = \\dfrac{1}{x\\ln 10}$. Suy ra $y'=\\mathrm{e}^x+\\dfrac{1}{x\\ln 10}$."
    },
    {
        q: "Cho hàm số $y=f(x)$ xác định, có đạo hàm trên $\\mathbb{R}$ và có bảng biến thiên. Giá trị cực đại của hàm số bằng:",
        image: "images/2612OnTNDe8/2612OnTNDe8TN9.png",
        options: [
            "$-2$",
            "$0$",
            "$-3$",
            "$1$"
        ],
        answer: 3,
        explanation: "Dựa vào bảng biến thiên, hàm số đạt cực đại tại điểm $x=-2$ và giá trị cực đại tương ứng của hàm số bằng $y_{\\text{CĐ}} = 1$."
    },
    {
        q: "Có bao nhiêu cách chọn $3$ học sinh từ $10$ học sinh?",
        options: [
            "$\\mathrm {A}_{10}^3$",
            "$10^3$",
            "$3^{10}$",
            "$\\mathrm {C}_{10}^3$"
        ],
        answer: 3,
        explanation: "Chọn nhóm 3 học sinh ngẫu nhiên không tính thứ tự trong tập hợp 10 học sinh tương ứng số tổ hợp chập 3 của 10: $\\mathrm {C}_{10}^3$."
    },
    {
        q: "Khảo sát thời gian tập thể dục của một số học sinh thu được mẫu số liệu ghép nhóm sau: <br><table border='1' style='border-collapse:collapse; text-align:center; width:100%; max-width:500px; margin:10px auto;'><tr><td>Thời gian (phút)</td><td>$[0;10)$</td><td>$[10;20)$</td><td>$[20;30)$</td><td>$[30;40)$</td><td>$[40;50)$</td><td>$[50;60)$</td></tr><tr><td>Số học sinh</td><td>10</td><td>15</td><td>22</td><td>26</td><td>20</td><td>17</td></tr></table> Tìm trung vị của mẫu số liệu trên (*làm tròn kết quả đến hàng phần mười*).",
        options: [
            "$32,2$",
            "$31,4$",
            "$33,1$",
            "$33,2$"
        ],
        answer: 2,
        explanation: "Tổng số học sinh $n = 110 \\Rightarrow$ vị trí trung vị là $\\dfrac{n}{2} = 55$, thuộc nhóm $[30; 40)$.\\nTần số tích lũy các nhóm trước là $10+15+22 = 47$. Công thức trung vị: $M_e = 30 + \\dfrac{55 - 47}{26} \\cdot 10 \\approx 33,1$."
    },
    {
        q: "Cho hình hộp $ABCD.A'B'C'D'$. Khẳng định nào sau đây là đúng?",
        image: "images/2612OnTNDe8/2612OnTNDe8TN12.png",
        options: [
            "$\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=\\overrightarrow{AC}$",
            "$\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=\\overrightarrow{AB'}$",
            "$\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=\\overrightarrow{AD'}$",
            "$\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=\\overrightarrow{AC'}$"
        ],
        answer: 3,
        explanation: "Theo quy tắc hình hộp mở rộng cho không gian ba chiều: tổng ba vectơ chung gốc cạnh hình hộp bằng vectơ đường chéo chính chung gốc, tức là $\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=\\overrightarrow{AC'}$."
    }
];

window.quizData['on-tn-de-8-2612_p2'] = [
    {
        q: "Trong không gian với hệ tọa độ $Oxyz$, cho tam giác $ABC$, với $A(5;1;3)$, $B(1;6;2)$, $C(5;0;4)$. Xét tính đúng sai của các khẳng định sau:",
        sub_questions: [
            { text: "$\\overrightarrow{AB}=(-4;5;-1)$, $\\overrightarrow{AC}=(0;-1;-1)$", correct: false },
            { text: "Biết điểm $D(a;b;c)$ sao cho tứ giác $ABCD$ là hình bình hành, ta có $a+b+c=9$", correct: true },
            { text: "$\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=-10$", correct: false },
            { text: "Gọi $\\alpha$ là số đo góc $A$ của tam giác $ABC$. Khi đó $\\cos \\alpha = \\dfrac{\\sqrt{21}}{7}$", correct: false }
        ],
        explanation: "- Mệnh đề 1 SAI vì $\\overrightarrow{AB} = (-4; 5; -1)$ còn $\\overrightarrow{AC} = (0; -1; 1)$.\\n- Mệnh đề 2 ĐÚNG vì tứ giác $ABCD$ là hình bình hành $\\Leftrightarrow \\overrightarrow{AB} = \\overrightarrow{DC} \\Leftrightarrow ( -4; 5; -1) = (5-a; 0-b; 4-c) \\Rightarrow D(9;-5;5) \\Rightarrow a+b+c = 9$.\\n- Mệnh đề 3 SAI vì tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = (-4)0 + 5(-1) + (-1)1 = -6$.\\n- Mệnh đề 4 SAI vì tính góc: $\\cos \\alpha = \\dfrac{-6}{\\sqrt{42}\\sqrt{2}} = -\\dfrac{\\sqrt{21}}{7}$."
    },
    {
        q: "Cho hàm số $f(x)=x-\\ln x$. Xét tính đúng sai của các khẳng định sau:",
        sub_questions: [
            { text: "Tập xác định của hàm số là $\\mathscr {D}=(0;+\\infty)$", correct: true },
            { text: "Đạo hàm $f'(x)=1-\\dfrac{1}{x}$", correct: true },
            { text: "Phương trình $f'(x)=0$ có nghiệm duy nhất $x=1$", correct: true },
            { text: "Giá trị lớn nhất của hàm số $f(x)$ trên đoạn $\\left[ \\dfrac{1}{3}; 2\\right] $ bằng $\\dfrac{1}{3}+\\ln 3$", correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì điều kiện biểu thức logarit xác định: $x > 0$.\\n- Mệnh đề 2 ĐÚNG vì đạo hàm từng thành phần cơ bản.\\n- Mệnh đề 3 ĐÚNG vì $1 - \\dfrac{1}{x} = 0 \\Leftrightarrow x = 1$ (thỏa mãn).\\n- Mệnh đề 4 ĐÚNG vì tính các giá trị đầu mút biên và điểm cực trị: $f(1)=1, f(1/3)=\\dfrac{1}{3}+\\ln 3, f(2)=2-\\ln 2$, so sánh thấy giá trị lớn nhất cực đại bằng $\\dfrac{1}{3}+\\ln 3$."
    },
    {
        q: "Một xưởng mộc dùng gỗ sồi để sản xuất 5 chiếc bàn mỗi ngày. Chi phí cho mỗi lần vận chuyển nguyên liệu là 5.625 USD, chi phí để lưu trữ một đơn vị nguyên liệu là 10 USD mỗi ngày. Giả sử lượng nguyên liệu cần thiết để sản xuất một chiếc bàn là 1 đơn vị và lượng lưu trữ trung bình bằng một nửa tổng đầu kì và cuối kì. Giả sử hàng về sau mỗi $x$ ngày. Xét tính đúng sai:",
        sub_questions: [
            { text: "Một chu kì sản xuất, xưởng mộc này nhập về $5x$ đơn vị nguyên liệu", correct: true },
            { text: "Chi phí để lưu trữ nguyên liệu trong $x$ ngày của một chu kì sản xuất là $50x^2$ USD", correct: false },
            { text: "Hàm chi phí trung bình mỗi ngày trong một chu kì sản xuất là $c(x) = 50x + \\dfrac{5\\,625}{x}$", correct: false },
            { text: "Để chi phí trung bình mỗi ngày trong một chu kì sản xuất là ít nhất thì xưởng mộc nên nhập hàng sau mỗi 15 ngày và mỗi lần nhập về 75 unit nguyên liệu", correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì tiêu thụ 5 đơn vị/ngày, chu kì $x$ ngày cần nhập $5x$ đơn vị.\\n- Mệnh đề 2 SAI vì lưu trữ trung bình mỗi ngày là $\\dfrac{5x+0}{2} = 2,5x$. Chi phí lưu kho mỗi ngày là $10 \\cdot 2,5x = 25x$ USD, tổng chi phí kho trong $x$ ngày phải là $25x^2$ USD.\\n- Mệnh đề 3 SAI vì tổng chi phí chu kì $C(x) = 5625 + 25x^2 \\Rightarrow$ Chi phí trung bình mỗi ngày: $p(x) = \\dfrac{5625}{x} + 25x$.\\n- Mệnh đề 4 ĐÚNG vì dùng bất đẳng thức AM-GM tối ưu hàm chi phí ngày: $\\dfrac{5625}{x} + 25x \\ge 2\\sqrt{5625 \\cdot 25} = 750$. Dấu bằng xảy ra khi $25x^2 = 5625 \\Leftrightarrow x=15$ ngày, lượng nhập tương ứng là $5 \\cdot 15 = 75$ đơn vị."
    },
    {
        q: "Cho hình lăng trụ $ABC.A'B'C'$ có tam giác $ABC$ vuông cân tại $A$, hình chiếu vuông góc $H$ của $A'$ trên mặt phẳng $(ABC)$ trùng với trọng tâm tam giác $ABC$. Biết $AA'=BC=2a$. Xét tính đúng sai:",
        sub_questions: [
            { text: "Độ dài đường cao hình lăng trụ bằng $\\dfrac{4a\\sqrt{2}}{3}$", correct: true },
            { text: "Thể tích khối lăng trụ đã cho bằng $4a^3\\sqrt{2}$", correct: false },
            { text: "Khoảng cách giữa hai đường thẳng $BB'$ và $AC$ gấp ba lần khoảng cách từ $H$ đến $(ACC'A')$", correct: true },
            { text: "Khoảng cách giữa hai đường thẳng $BB'\\text{ }$và $AC$ bằng $\\dfrac{2a\\sqrt{34}}{17}$", correct: false }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì tam giác đáy vuông cân cạnh huyền $2a \\Rightarrow AB=AC=a\\sqrt{2}$, trung tuyến $AM=a$, đoạn $AH = \\dfrac{2a}{3}$. Chiều cao chóp lăng trụ $A'H = \\sqrt{AA'^2-AH^2} = \\dfrac{4a\\sqrt{2}}{3}$.\\n- Mệnh đề 2 SAI vì diện tích đáy $S = a^2 \\Rightarrow V = a^2 \\cdot \\dfrac{4a\\sqrt{2}}{3} = \\dfrac{4a^3\\sqrt{2}}{3}$.\\n- Mệnh đề 3 ĐÚNG vì đường thẳng $BB' \\parallel AA' \\Rightarrow BB' \\parallel (ACC'A')$. Giao điểm của đường dóng trọng tâm $BH$ cắt $AC$ tại trung điểm $P$, có tỷ lệ cạnh $\\dfrac{BP}{HP} = 3$.\\n- Mệnh đề 4 SAI vì khoảng cách bằng khoảng cách từ $B$ đến mặt đứng $\\mathrm{d}(B, (ACC'A')) = \\dfrac{3V_{B.ACC'A'}}{S_{ACC'A'}} = \\dfrac{4a\\sqrt{34}}{17}$."
    }
];

window.quizData['on-tn-de-8-2612_p3'] = [
    {
        q: "Anh A mở một nhà hàng lẩu. Anh đã trang bị cho mỗi bàn ăn một nồi lẩu có dạng hình trụ dọc, bán kính đáy nồi (ngoài) là $R=15$ cm, bán kính trụ giữa (trong) là $r=3{,}5$ cm, chiều cao nồi là $h=10$ cm. Để khách hàng có trải nghiệm tốt nhất, anh A cần xác định chiều dài tối thiểu của chiếc đũa sao cho dù đầu đũa có bị trượt vào vị trí nào trong nồi, phần đầu đũa thừa ra ngoài miệng nồi vẫn phải lớn hơn 5 cm. Tính chiều dài tối thiểu $L$ của chiếc đũa (*làm tròn kết quả đến phần mười*).",
        image: "images/2612OnTNDe8/2612OnTNDe8TLN1.png",
        answer: "35.8",
        explanation: "Hình chiếu vuông góc của chiếc đũa xuống đáy nồi lớn nhất khi nó tạo thành một dây cung tiếp xúc với đường tròn lõi bên trong: $l = 2\\sqrt{R^2 - r^2} = 2\\sqrt{15^2 - 3,5^2} = 2\\sqrt{212,75}$ cm.\\nĐộ dài tối đa của đoạn đũa nằm lọt hoàn toàn bên trong lòng nồi là cạnh huyền chéo không gian chóp đứng: $L_{\\text{trong}} = \\sqrt{l^2 + h^2} = \\sqrt{4(212,75) + 10^2} = \\sqrt{951}$ cm.\\nChiều dài chiếc đũa tối thiểu để luôn thừa ra ngoài tối thiểu 5cm là: $L = L_{\\text{trong}} + 5 = \\sqrt{951} + 5 \\approx 35,8$ cm."
    },
    {
        q: "Để chuẩn bị cho lễ Giáng sinh, một nhóm học sinh thiết kế một vòng hoa hình tròn và lắp 10 bóng đèn led cách đều nhau xung quanh vòng hoa đó. Mỗi bóng đèn đều có hai chế độ màu: Xanh hoặc Đỏ. Khi cắm điện, mỗi bóng đèn sẽ sáng lên một màu ngẫu nhiên với xác suất như nhau. Tính xác suất để sau khi bật điện, không có 4 bóng đèn nào cùng màu mà vị trí của chúng tạo thành 4 đỉnh của một hình chữ nhật. (Làm tròn đến hàng phần trăm).",
        image: "images/2612OnTNDe8/2612OnTNDe8TLN2.png",
        answer: "0.34",
        explanation: "Không gian mẫu tổng số trạng thái sáng của 10 bóng đèn là $n(\\Omega) = 2^{10} = 1024$. Hình chữ nhật nội tiếp vòng tròn tạo bởi 2 đường kính đi qua tâm đối xứng thập giác đều. Có $\\dfrac{10}{2} = 5$ đường kính, tạo ra $C_5^2 = 10$ hình chữ nhật.\\nMột cặp bóng đầu mút đường kính có 4 trạng thái: XX (1 cách), ĐĐ (1 cách), và Khác màu (2 cách). Để không có hình chữ nhật nào có 4 đỉnh cùng màu, ta không được phép có hai đường kính cùng trạng thái XX hoặc cùng trạng thái ĐĐ trong hệ thống, tức là số lượng đường kính XX và ĐĐ chỉ được phép bằng 0 hoặc 1.\\n- TH1: Có 0 đường XX, 0 đường ĐĐ (5 đường khác) $\\Rightarrow C_5^0C_5^0 \\cdot 2^5 = 32$.\\n- TH2: Có 1 đường XX, 0 đường ĐĐ (4 đường khác) $\\Rightarrow C_5^1C_4^0 \\cdot 1 \\cdot 2^4 = 80$.\\n- TH3: Có 0 đường XX, 1 đường ĐĐ (4 đường khác) $\\Rightarrow C_5^0C_5^1 \\cdot 1 \\cdot 2^4 = 80$.\\n- TH4: Có 1 đường XX, 1 đường ĐĐ (3 đường khác) $\\Rightarrow C_5^1C_4^1 \\cdot 1 \\cdot 1 \\cdot 2^3 = 160$.\\nTổng số trường hợp thỏa mãn: $n(A) = 32 + 80 + 80 + 160 = 352$. Xác suất thu được: $P = \\dfrac{352}{1024} = \\dfrac{11}{32} \\approx 0,34$."
    },
    {
        q: "Cho hàm số $y=f(x)=-x^3+3x^2-4$ có đồ thị là $(C)$. Đường thẳng đi qua hai điểm cực trị của $(C)$ là đồ thị hàm số $g(x)=ax+b$. Gọi $M$, $m$ lần lượt là giá trị lớn nhất nhỏ nhất của hàm $h(x)=\\sqrt{-x(ax+b)}$ trên tập xác định. Tính giá trị của biểu thức $\\sqrt{8}(300M-20m)$.",
        answer: "1200",
        explanation: "Đạo hàm $f'(x) = -3x^2 + 6x = 0 \\Leftrightarrow x=0 \\Rightarrow y=-4$ và $x=2 \\Rightarrow y=0$. Đường thẳng qua hai điểm cực trị $A(0;-4)$ và $B(2;0)$ tìm được phương trình hệ số là $g(x) = 2x - 4$.\\nHàm số khảo sát: $h(x) = \\sqrt{-x(2x-4)} = \\sqrt{4x-2x^2}$. Tập xác định điều kiện lấy căn $\\mathscr{D} = [0;2]$.\\nĐạo hàm hàm căn thức: $h'(x) = \\dfrac{4-4x}{2\\sqrt{4x-2x^2}} = 0 \\Leftrightarrow x=1$. Tính giá trị tại các điểm cực trị và biên đầu mút: $h(0)=0, f(2)=0, f(1)=\\sqrt{2}$.\\nSuy ra giá trị nhỏ nhất $m=0$, giá trị lớn nhất $M=\\sqrt{2}$.\\nGiá trị biểu thức: $\\sqrt{8}(300\\sqrt{2} - 20 \\cdot 0) = \\sqrt{16} \\cdot 300 = 1200$."
    },
    {
        q: "Đồ thị hàm số $y=\\dfrac{x^3\\left(\\sqrt{x^2-4}+x\\right)}{2x^3+3x^2-3x-2}$ có tất cả bao nhiêu đường tiệm cận?",
        answer: "3",
        explanation: "Điều kiện xác định hàm số lấy căn và khử mẫu: $x^2-4 \\ge 0 \\Rightarrow x \\in (-\\infty;-2] \\cup [2;+\\infty)$. Phân tích mẫu số: $2x^3+3x^2-3x-2 = (x+2)(2x^2-x-1) = 0 \\Rightarrow x=-2, x=1, x=-1/2$. Đối chiếu điều kiện tập xác định $\\mathscr{D} = (-\\infty;-2) \\cup [2;+\\infty)$.\\n- Xét giới hạn tiệm cận đứng tại biên xác định: $\\lim_{x \\to -2^-} y = -\\infty \\Rightarrow x=-2$ là một tiệm cận đứng (vị trí nghiệm $x=1, x=-1/2$ nằm ngoài tập xác định nên bị loại).\\n- Xét giới hạn tiệm cận ngang khi $x \\to -\\infty$: Nhân liên hợp tử số thành $\\dfrac{x^3(-4)}{(2x^3+3x^2-3x-2)(\\sqrt{x^2-4}-x)} \\Rightarrow \\lim_{x \\to -\\infty} y = 0$. Vậy $y=0$ là tiệm cận ngang bên trái.\\n- Xét giới hạn khi $x \\to +\\infty$: $\\lim_{x \\to +\\infty} \\dfrac{y}{x} = 1$ và $\\lim_{x \\to +\\infty}(y-x) = -1,5 \\Rightarrow y = x - 1,5$ là đường tiệm cận xiên bên phải.\\nTổng cộng đồ thị hàm số có 3 đường tiệm cận."
    },
    {
        q: "Một trang trại dự định dành 100 ha đất để trồng ba loại cây: cao su, cà phê và hồ tiêu. Lợi nhuận hàng năm ước tính của cao su là 40 triệu đồng/ha, cà phê là 60 triệu đồng/ha và hồ tiêu là 80 triệu đồng/ha. Diện tích tuân thủ các ràng buộc: 1) Tổng diện tích cà phê và hồ tiêu không vượt quá diện tích cao su; 2) Diện tích hồ tiêu không vượt quá 20 ha; 3) Diện tích cà phê không vượt quá 3 lần diện tích hồ tiêu. Tổng lợi nhuận thu được hàng năm lớn nhất là bao nhiêu tỷ đồng?",
        answer: "5.4",
        explanation: "Gọi số ha trồng cao su, cà phê, hồ tiêu lần lượt là $x, y, z \\ge 0 \\Rightarrow x+y+z=100 \\Rightarrow x = 100-y-z$.\\nRàng buộc mô hình hóa: 1) $y+z \\le x \\Leftrightarrow y+z \\le 100-y-z \\Leftrightarrow y+z \\le 50$. 2) $z \\le 20$. 3) $y \\le 3z$.\\nHàm mục tiêu lợi nhuận tổng thể: $L = 40x + 60y + 80z = 40(100-y-z) + 60y + 80z = 20y + 40z + 4000$.\\nQuy hoạch tuyến tính tìm giá trị lớn nhất hàm số phụ $F(y,z) = 20y + 40z$ trên miền phẳng tứ giác tạo bởi các đỉnh $O(0;0), M(37,5; 12,5), B(30;20), C(0;20)$.\\nKiểm tra giá trị tại các đỉnh đa giác: $F(O)=0, F(C)=800, F(M)=1250, F(B)=20(30)+40(20)=1400$.\\nGiá trị cực đại đạt được tại đỉnh $B(30;20)$ với $F = 1400 \\Rightarrow L_{\\max} = 1400 + 4000 = 5400$ triệu đồng $= 5,4$ tỷ đồng."
    },
    {
        q: "Khi dạo chơi trong một công viên bạn An di chuyển trên cầu cong có hình parabol, bạn Lan di chuyển trên bờ hồ đường tròn. Khoảng cách giữa hai chân cầu parabol là $AB=30$ m, đỉnh $H$ của parabol cách đường thẳng $AB$ một khoảng $HK=30$ m, khoảng cách từ tâm $I$ của đường tròn đến đường thẳng $AB$ và $HK$ lần lượt là $IE=30$ m và $IH=30$ m. Tính khoảng cách nhỏ nhất giữa hai bạn An và Lan, biết rằng đường tròn có bán kính bằng 3 m (*kết quả làm tròn đến hàng phần chục*).",
        image: "images/2612OnTNDe8/2612OnTNDe8TLN6.png",
        answer: "20.6",
        explanation: "Chọn hệ trục tọa độ gốc vuông đặt tại trung điểm chân cầu parabol, trục hoành trùng $AB$ và trục tung đi qua đỉnh cầu $H$. Tọa độ các điểm xác định là $H(0;30), B(15;0), A(-15;0), E(30;0), I(30;30)$.\\nPhương trình cầu parabol có dạng $y = ax^2+30$, thế tọa độ chân cầu $B(15;0) \\Rightarrow 0 = a(15)^2+30 \\Rightarrow y = -\\dfrac{6}{45}x^2+30$. Phương trình hồ đường tròn tâm $I$: $(x-30)^2+(y-30)^2 = 9$.\\nGọi một điểm trên cầu có tọa độ biến thiên $M(x_0; y_0)$, khoảng cách từ $M$ đến Lan trên thềm hồ ngắn nhất nằm trên đường dóng đi qua tâm hình cầu $I$, độ dài nhỏ nhất bằng cực tiểu đoạn thẳng $\\min(MI) - R_{hồ}$.\\nSử dụng tính chất hình học tiếp tuyến vuông góc bán kính tại điểm cực trị: $y'(x_0) \\cdot k_{IM} = -1 \\Leftrightarrow \\left(-\\dfrac{12x_0}{45}\\right) \\cdot \\dfrac{-\\dfrac{6}{45}x_0^2}{x_0-30} = -1 \\Leftrightarrow 8x_0^3 + 225x_0 - 6750 = 0 \\Rightarrow x_0 \\approx 8,4613$.\\nThế hoành độ tìm được khoảng cách cực tiểu từ tâm hồ tới cầu $MI \\approx 23,56$ m. Khoảng cách nhỏ nhất giữa An và Lan là $23,56 - 3 = 20,56 \\approx 20,6$ m."
    }
];