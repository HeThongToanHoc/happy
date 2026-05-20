// DỮ LIỆU ĐỀ 5 - THUỘC HỆ THỐNG IRIS MATH
window.quizData = window.quizData || {};

window.quizData['on-tn-de-5-2612_p1'] = [
    {
        q: "Cho cấp số nhân $(u_n)$ có $u_1 = 3, u_4 = 24$. Tính $u_5$.",
        options: [
            "$31$",
            "$7$",
            "$2$",
            "$48$"
        ],
        answer: 3,
        explanation: "Ta có số hạng tổng quát: $u_4 = u_1 \\cdot q^3 \\Rightarrow 24 = 3 \\cdot q^3 \\Rightarrow q^3 = 8 \\Rightarrow q = 2$.\\nSố hạng thứ 5 là: $u_5 = u_4 \\cdot q = 24 \\cdot 2 = 48$."
    },
    {
        q: "Cho hình lập phương $ABCD.A'B'C'D'$. Tính góc giữa hai đường thẳng $AB$ và $A'C'$.",
        image: "images/2612OnTNDe5/2612OnTNDe5TN2.png",
        options: [
            "$45^{\\circ}$",
            "$90^{\\circ}$",
            "$60^{\\circ}$",
            "$30^{\\circ}$"
        ],
        answer: 0,
        explanation: "Vì $AB \\parallel A'B'$ nên góc giữa $AB$ và $A'C'$ bằng góc giữa $A'B'$ and $A'C'$.\\nXét mặt đáy $A'B'C'D'$ là hình vuông, đường chéo $A'C'$ tạo với cạnh đáy $A'B'$ một góc $45^{\\circ}$. Do đó $(AB, A'C') = 45^{\\circ}$."
    },
    {
        q: "Cho mẫu số liệu ghép nhóm có bảng tần số sau: <br><table border='1' style='border-collapse:collapse; text-align:center; width:100%; max-width:500px; margin:10px auto;'><tr><td>Nhóm</td><td>$[16; 21)$</td><td>$[21; 26)$</td><td>$[26; 31)$</td><td>$[31; 36)$</td><td>$[36; 41)$</td></tr><tr><td>Tần số</td><td>4</td><td>6</td><td>8</td><td>18</td><td>4</td></tr></table> Tính khoảng biến thiên của mẫu số liệu trên.",
        options: [
            "$5$",
            "$18$",
            "$40$",
            "$25$"
        ],
        answer: 3,
        explanation: "Khoảng biến thiên của mẫu số liệu ghép nhóm bằng hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên: $R = 41 - 16 = 25$."
    },
    {
        q: "Trong mặt phẳng tọa độ $Oxy$, độ dài trục ảo của hypebol $(H)\\colon \\dfrac{x^2}{16}-\\dfrac{y^2}{25}=1$ bằng",
        options: [
            "$10$",
            "$8$",
            "$32$",
            "$50$"
        ],
        answer: 0,
        explanation: "Từ phương trình hypebol, ta có $a^2=16$ và $b^2=25 \\Rightarrow b=5$.\\nĐộ dài trục ảo của hypebol được tính bằng công thức $2b = 2 \\cdot 5 = 10$."
    },
    {
        q: "Cho hàm số $y=f(x)$ có đạo hàm $f'(x) = (x-1)(x-2)^2(x-3)^3$. Số điểm cực trị của hàm số $y=f(x)$ là",
        options: [
            "$1$",
            "$2$",
            "$3$",
            "$0$"
        ],
        answer: 1,
        explanation: "Số điểm cực trị của hàm số bằng số nghiệm bội lẻ mà đạo hàm đổi dấu khi đi qua. Phương trình $f'(x) = 0$ có nghiệm $x=1$ (bội 1), $x=2$ (bội 2), $x=3$ (bội 3). Các nghiệm bội lẻ là $x=1$ và $x=3$, do đó hàm số có 2 điểm cực trị."
    },
    {
        q: "Trong không gian với hệ trục tọa độ $Oxyz$, cho đường thẳng $d: \\dfrac{x-1}{2} = \\dfrac{y-3}{-1} = \\dfrac{z+2}{3}$. Một vectơ chỉ phương của $d$ là:",
        options: [
            "$\\vec{u} = (2;-1;3)$",
            "$\\vec{u} = (-2;1;3)$",
            "$\\vec{u} = (1;3;-2)$",
            "$\\vec{u} = (2;1;-3)$"
        ],
        answer: 0,
        explanation: "Dựa vào mẫu số của phương trình đường thẳng dạng chính tắc, ta xác định được ngay bộ tọa độ vectơ chỉ phương là $\\vec{u} = (2;-1;3)$."
    },
    {
        q: "Cho ba số $a, b, c$ khác 0 thoả mãn $4^a = 3^b = 6^c$. Tính giá trị của biểu thức $\\dfrac{c}{a} + \\dfrac{2c}{b}$.",
        options: [
            "$3$",
            "$0$",
            "$1$",
            "$2$"
        ],
        answer: 3,
        explanation: "Đặt $4^a = 3^b = 6^c = k \\Rightarrow a = \\log_4 k, b = \\log_3 k, c = \\log_6 k$.\\nSuy ra: $\\dfrac{c}{a} + \\dfrac{2c}{b} = c \\left( \\log_k 4 + 2\\log_k 3 \\right) = c \\log_k (4 \\cdot 9) = c \\log_k 36 = c \\log_k (6^2) = 2c \\log_k 6 = 2c \\cdot \\dfrac{1}{c} = 2$."
    },
    {
        q: "Đường tiệm cận ngang đồ thị hàm số $y = \\dfrac{3x-1}{x-2}$ là",
        options: [
            "$x=2$",
            "$y=2$",
            "$x=3$",
            "$y=3$"
        ],
        answer: 3,
        explanation: "Ta lấy giới hạn hàm số tại vô cực: $\\lim\\limits_{x \\to \\pm\\infty} \\dfrac{3x-1}{x-2} = 3$. Vậy đường thẳng $y=3$ là tiệm cận ngang của đồ thị."
    },
    {
        q: "Gieo một đồng xu cân đối đồng chất 3 lần. Xác suất để cả 3 lần xuất hiện mặt ngửa là",
        options: [
            "$\\dfrac{7}{8}$",
            "$\\dfrac{1}{6}$",
            "$\\dfrac{1}{8}$",
            "$\\dfrac{1}{2}$"
        ],
        answer: 2,
        explanation: "Không gian mẫu khi tung đồng xu 3 lần là $n(\\Omega) = 2^3 = 8$.\\nBiến cố cả 3 lần đều ngửa chỉ có duy nhất 1 trường hợp thuận lợi $(N, N, N)$. Xác suất tương ứng là $\\dfrac{1}{8}$."
    },
    {
        q: "Họ nguyên hàm của hàm số $f(x) = 5^x$ là",
        options: [
            "$\\dfrac{5^x}{\\ln 5} + C$",
            "$\\dfrac{5^{x+1}}{x+1} + C$",
            "$5^x + C$",
            "$5^x \\cdot \\ln 5 + C$"
        ],
        answer: 0,
        explanation: "Áp dụng đúng công thức mẫu nguyên hàm cơ bản của hàm số mũ: $\\int a^x \\text{d}x = \\dfrac{a^x}{\\ln a} + C$. Với $a=5$, ta được $\\dfrac{5^x}{\\ln 5} + C$."
    },
    {
        q: "Cho hình chóp có diện tích đáy bằng $10$ và chiều cao bằng $6$. Tính thể tích khối chóp đã cho.",
        options: [
            "$30$",
            "$16$",
            "$20$",
            "$60$"
        ],
        answer: 2,
        explanation: "Thể tích khối chóp được tính theo công thức: $V = \\dfrac{1}{3} S_{\\text{đáy}} \\cdot h = \\dfrac{1}{3} \\cdot 10 \\cdot 6 = 20$."
    },
    {
        q: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Tìm khẳng định đúng.",
        image: "images/2612OnTNDe5/2612OnTNDe5TN12.png",
        options: [
            "$\\vec{SA} = \\vec{SB} + \\vec{DC}$",
            "$\\vec{SA} = \\vec{SB} + \\vec{CD}$",
            "$\\vec{AC} = \\vec{AB} + \\vec{BD}$",
            "$\\vec{SA} - \\vec{SB} = \\vec{SC} - \\vec{SD}$"
        ],
        answer: 1,
        explanation: "Vì $ABCD$ là hình bình hành nên ta có cặp vectơ bằng nhau $\\vec{BA} = \\vec{CD}$.\\nSử dụng quy tắc hiệu vectơ chung gốc: $\\vec{SA} - \\vec{SB} = \\vec{BA} \\Rightarrow \\vec{SA} - \\vec{SB} = \\vec{CD} \\Leftrightarrow \\vec{SA} = \\vec{SB} + \\vec{CD}$."
    }
];

window.quizData['on-tn-de-5-2612_p2'] = [
    {
        q: "Cho hàm số $y=f(x)=\\dfrac{-x^2+x-2}{x+1}$ có đồ thị $(C)$. Xét tính đúng sai của các khẳng định sau:",
        sub_questions: [
            { text: "$y^{\\prime}=f^{\\prime}(x)=\\dfrac{-x^2-2x+3}{(x+1)^2} ; \\forall x \\neq -1$", correct: true },
            { text: "Tiệm cận xiên của đồ thị hàm số là đường thẳng có phương trình $y=x-2$", correct: false },
            { text: "Khoảng cách giữa hai điểm cực trị của đồ thị $(C)$ bằng 4", correct: false },
            { text: "Trên đồ thị $(C)$ có đúng 4 điểm M có tung độ và hoành độ là các số nguyên sao cho tiếp tuyến của $(C)$ tại M tạo với hai đường tiệm cận một tam giác có diện tích bằng 8", correct: false }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì tính đạo hàm tử mẫu cho ra $y' = \\dfrac{(-2x+1)(x+1)-(-x^2+x-2)}{(x+1)^2} = \\dfrac{-x^2-2x+3}{(x+1)^2}$.\\n- Mệnh đề 2 SAI vì chia đa thức ta được $y = -x + 2 - \\dfrac{4}{x+1}$, suy ra tiệm cận xiên là $y = -x + 2$.\\n- Mệnh đề 3 SAI vì hai điểm cực trị là $A(1;-1)$ và $B(-3;7) \\Rightarrow AB = \\sqrt{(-4)^2 + 8^2} = 4\\sqrt{5} \\neq 4$.\\n- Mệnh đề 4 SAI vì tiếp tuyến tại mọi điểm thuộc đồ thị hàm phân thức bậc hai trên bậc nhất luôn tạo với hai tiệm cận một tam giác có diện tích không đổi $S = 2|a \\cdot m| = 8$. Yêu cầu bài toán tương đương với tìm số điểm có tọa độ nguyên thuộc $(C)$. Để $y \\in \\mathbb{Z}$ thì $x+1$ phải là ước của 4 $\\Rightarrow$ Có tất cả 6 điểm nguyên thỏa mãn."
    },
    {
        q: "Qua khảo sát, thời gian hoàn thành một bài thi thử tốt nghiệp của một số học sinh lớp 12 của trường Y được ghi lại ở bảng số liệu ghép nhóm. Xét tính đúng sai của các khẳng định sau:",
        sub_questions: [
            { text: "Khoảng biến thiên của mẫu số liệu trên bằng 20", correct: false },
            { text: "Tứ phân vị $Q_3$ của mẫu số liệu trên bằng 85,9 (kết quả làm tròn đến một chữ số thập phân)", correct: true },
            { text: "Phương sai của mẫu số liệu trên bằng 34,2 (kết quả làm tròn đến một chữ số thập phân)", correct: false },
            { text: "Số học sinh có thời gian làm bài từ 65 phút đến dưới 75 phút chiếm tỉ lệ là 17,6% (kết quả làm tròn đến một chữ số thập phân)", correct: true }
        ],
        explanation: "- Mệnh đề 1 SAI vì khoảng biến thiên tính từ biên ngoài: $R = 90 - 65 = 25$.\\n- Mệnh đề 2 ĐÚNG vì cỡ mẫu $n=102$, vị trí của $Q_3$ là $76,5$, thuộc nhóm $[85;90]$. Tính toán: $Q_3 = 85 + \\dfrac{76,5 - 71}{31} \\cdot 5 \\approx 85,9$.\\n- Mệnh đề 3 SAI vì tính toán phương sai theo đúng giá trị đại diện và số trung bình $\\bar{x} \\approx 81,13$ cho ra kết quả $s^2 \\approx 33,9$.\\n- Mệnh đề 4 ĐÚNG vì số học sinh từ 65 đến dưới 75 phút là $5+13=18$. Tỉ lệ tương ứng: $\\dfrac{18}{102} \\cdot 100\\% \\approx 17,6\\%$."
    },
    {
        q: "Một hộp chứa các viên bi gồm 5 viên bi trắng, 6 viên bi đỏ và 8 viên bi xanh. Lấy ngẫu nhiên đồng thời 5 viên bi từ hộp, trong đó có $x$ viên bi trắng, $y$ viên bi đỏ và $z$ viên bi xanh. Xét tính đúng sai:",
        sub_questions: [
            { text: "Số phần tử của không gian mẫu là $n(\\Omega) = C_{19}^5$", correct: true },
            { text: "Xác suất lấy được 5 viên bi đều màu xanh là $\\dfrac{1}{2907}$", correct: false },
            { text: "Xác suất lấy được 5 viên bi có ít nhất một viên bi màu xanh nhỏ hơn 0,04", correct: false },
            { text: "Xác suất lấy được 5 viên đủ cả ba màu, đồng thời ba số $x-y, y-z, z-x$ theo thứ tự lập thành cấp số cộng bằng $\\dfrac{215}{969}$", correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì tổng số bi là $5+6+8=19$, chọn 5 viên $\\Rightarrow n(\\Omega) = C_{19}^5$.\\n- Mệnh đề 2 SAI vì số cách chọn 5 bi xanh là $C_8^5 = 56 \\Rightarrow P = \\dfrac{56}{11628} = \\dfrac{14}{2907}$.\\n- Mệnh đề 3 SAI vì tính xác suất biến cố đối không có bi xanh là $\\dfrac{C_{11}^5}{C_{19}^5} = \\dfrac{462}{11628} \\Rightarrow P = 1 - \\dfrac{462}{11628} \\approx 0,96 > 0,04$.\\n- Mệnh đề 4 ĐÚNG vì điều kiện cấp số cộng: $(x-y)+(z-x) = 2(y-z) \\Leftrightarrow y = z$. Kết hợp điều kiện đủ 3 màu và tổng bằng 5 ta có 2 trường hợp: TH1 ($y=1, z=1, x=3 \\Rightarrow C_5^3C_6^1C_8^1 = 480$); TH2 ($y=2, z=2, x=1 \\Rightarrow C_5^1C_6^2C_8^2 = 2100$). Tổng số cách là $2580 \\Rightarrow P = \\dfrac{2580}{11628} = \\dfrac{215}{969}$."
    },
    {
        q: "Bồn nhiên liệu của một chiếc máy bay hình con thoi được thiết kế là một khối tròn xoay có mặt cắt ngang quay quanh trục máy bay được mô phỏng trên hệ trục tọa độ $Oxy$. Phần đầu cao 9 m, rộng 8 m, có đường sinh là phần đồ thị $y = \\sqrt{ax+b}\\ (a,b>0)$; phần thân là hình trụ cao 30 m, đường kính 8 m; phần đuôi là một nửa hình cầu nối tiếp. Xét tính đúng sai:",
        image: "images/2612OnTNDe5/2612OnTNDe5DS4.png",
        sub_questions: [
            { text: "Thể tích của phần thân bằng $480\\text{ (m}^3\\text{)}$", correct: false },
            { text: "$9a = 16$", correct: true },
            { text: "Thể tích phần đầu bằng $24\\pi\\text{ (m}^3\\text{)}$", correct: false },
            { text: "Thể tích của bồn nhiên liệu trên nhỏ hơn 1750 mét khối", correct: false }
        ],
        explanation: "- Mệnh đề 1 SAI vì phần thân là hình trụ có bán kính $R=4$ m, cao $h=30$ m $\\Rightarrow V_{thân} = \\pi R^2h = 480\\pi \\text{ m}^3$ (đề bài thiếu $\\pi$).\\n- Mệnh đề 2 ĐÚNG vì đồ thị đi qua $(-9;0)$ và $(0;4)$ (do rộng 8m) $\\Rightarrow \\left\\{ \\begin{array}{l} -9a+b=0 \\\\ b=16 \\end{array} \\right. \\Rightarrow 9a=16$.\\n- Mệnh đề 3 SAI vì thể tích khối tròn xoay phần đầu tích phân bằng: $V_{đầu} = \\pi \\int_{-9}^{0} \\left(\\dfrac{16}{9}x + 16\\right) \\text{d}x = 72\\pi \\text{ m}^3$.\\n- Mệnh đề 4 SAI vì tổng thể tích gồm đầu ($72\\pi$), thân ($480\\pi$) và đuôi bán cầu ($V_3 = \\dfrac{1}{2} \\cdot \\dfrac{4}{3}\\pi \\cdot 4^3 = \\dfrac{128\\pi}{3}$). Tổng thể tích $V = \\dfrac{1784\\pi}{3} \\approx 1868,2 \\text{ m}^3 > 1750$."
    }
];

window.quizData['on-tn-de-5-2612_p3'] = [
    {
        q: "Cho khối lăng trụ tam giác đều $ABC \\cdot A^{\\prime}B^{\\prime}C^{\\prime}$. Biết số đo góc nhị diện $[A^{\\prime}, BC, A]$ bằng $30^{\\circ}$ và tam giác $A^{\\prime}BC$ có diện tích bằng $32$. Khoảng cách giữa hai đường thẳng $AB$ và $A^{\\prime}C^{\\prime}$ bằng bao nhiêu? (kết quả làm tròn đến hàng đơn vị).",
        answer: "4",
        explanation: "Gọi $M$ là trung điểm $BC$, vì lăng trụ đều nên $AM \\perp BC$ và $A'M \\perp BC \\Rightarrow \\widehat{A'MA} = 30^\\circ$ là góc nhị diện. Đặt cạnh đáy bằng $a \\Rightarrow AM = \\dfrac{a\\sqrt{3}}{2}$. Trong tam giác vuông $A'AM$, ta có $A'M = \\dfrac{AM}{\\cos 30^\\circ} = a$. Diện tích tam giác $S_{A'BC} = \\dfrac{1}{2} \\cdot BC \\cdot A'M = \\dfrac{1}{2} a^2 = 32 \\Rightarrow a = 8$. Chiều cao lăng trụ $AA' = AM \\cdot \\tan 30^\\circ = \\dfrac{8\\sqrt{3}}{2} \\cdot \\dfrac{\\sqrt{3}}{3} = 4$. Do mặt đáy chứa hai đường thẳng song song song song nhau nên khoảng cách chéo nhau chéo nhau chính bằng chiều cao lăng trụ $d = AA' = 4$."
    },
    {
        q: "Một tấm bìa cứng có kích thước 60 cm và 90 cm được gấp đôi thành một hình chữ nhật 60 cm và 45 cm. Sau đó, cắt ra từ các góc của hình chữ nhật vừa gấp bốn hình vuông bằng nhau có cạnh $x$ (cm). Tấm bìa được mở ra và sáu mép được gấp lên để tạo thành một hộp chữ nhật $(H)$ có nắp và đáy. Thể tích lớn nhất của khối $(H)$ bằng bao nhiêu lít? (làm tròn kết quả đến hàng phần mười).",
        image: "images/2612OnTNDe5/2612OnTNDe5TLN2.png",
        answer: "20.5",
        explanation: "Khi mở tấm bìa phẳng ra và dựng thành hộp, ta xác định các kích thước khối hộp theo biến $x$: chiều cao $h = 60 - 2x$, hai cạnh mặt đáy tương ứng lần lượt là $a = 45 - 2x$ và $b = 2x$. Điều kiện ràng buộc biên $0 < x < 22,5$. Hàm thể tích khối hộp chữ nhật: $V(x) = (45-2x) \\cdot 2x \\cdot (60-2x) = 8x^3 - 420x^2 + 5400x$. Tính đạo hàm và tìm nghiệm cực đại trên khoảng khảo sát ta được $x = \\dfrac{35-5\\sqrt{13}}{2} \\approx 8,486$ cm. Giá trị thể tích cực đại tương ứng đạt $V_{\\max} \\approx 20468,04 \\text{ cm}^3 \\approx 20,5$ lít."
    },
    {
        q: "Một hệ thống đường ống phức tạp có ba bể chứa nước A, B, C và các đường ống nối chúng. Nước có thể chảy giữa các bể theo các tỷ lệ sau mỗi giờ: Từ A: 20% chảy sang B, 10% chảy sang C, còn lại trong A; Từ B: 15% chảy sang A, 5% chảy sang C, còn lại trong B; Từ C: 10% chảy sang A, 20% chảy sang B, còn lại trong C. Ban đầu, tổng lượng nước trong ba bể là 5000 lít. Sau một giờ, lượng nước trong bể A tăng 150 lít, lượng nước trong bể B giảm 50 lít. Lượng nước ban đầu trong bể B bằng bao nhiêu lít?",
        answer: "2625",
        explanation: "Gọi lượng nước ban đầu trong 3 bể lần lượt là $x, y, z > 0$. Ta có phương trình tổng thể: $x + y + z = 5000$ (1). Xét tốc độ biến thiên vào-ra sau một giờ: Tại bể A tăng 150 lít $\\Rightarrow -0,3x + 0,15y + 0,1z = 150$ (2). Tại bể B giảm 50 lít $\\Rightarrow 0,2x - 0,2y + 0,2z = -50 \\Leftrightarrow x - y + z = -250$ (3). Kết hợp hệ phương trình (1) và (3) bằng phép trừ vế theo vế: $(x+y+z) - (x-y+z) = 5000 - (-250) \\Rightarrow 2y = 5250 \\Rightarrow y = 2625$ lít."
    },
    {
        q: "Trong không gian với hệ trục toạ độ $Oxyz$ (đơn vị mét), một vườn hoa nằm trên mặt phẳng $(P): 2x+2y-z-12=0$. Có hai bóng đèn chiếu sáng cố định đặt tại $A(40 ; -40 ; 12)$, $B(-40 ; 50 ; 38)$. Người ta thiết kế một đường ray để lắp đặt đèn di động M trên mặt vườn sao cho góc tạo bởi MA và MB với mặt vườn luôn bằng nhau. Độ dài đường ray là bao nhiêu mét (kết quả làm tròn đến hàng đơn vị)?",
        image: "images/2612OnTNDe5/2612OnTNDe5TLN4.png",
        answer: "1720",
        explanation: "Tính khoảng cách từ hai điểm đến mặt phẳng: $h_A = d(A,(P)) = 8$, $h_B = d(B,(P)) = 10$. Hai điểm nằm cùng phía so với $(P)$. Độ dài đoạn thẳng $AB = \\sqrt{15176}$, suy ra độ dài hình chiếu vuông góc của đoạn thẳng này lên mặt phẳng là $HK = \\sqrt{AB^2 - (h_B-h_A)^2} = \\sqrt{15172} = 2\\sqrt{3793}$. Gọi hình chiếu của M lên mặt phẳng là chính nó, điều kiện góc bằng nhau dẫn tới tỉ lệ khoảng cách tương đương phẳng: $\\dfrac{MK}{MH} = \\dfrac{BK}{AH} = \\dfrac{10}{8} = \\dfrac{5}{4}$. Quỹ tích điểm M thỏa mãn tỉ số khoảng cách đến hai điểm cố định là một đường tròn Apollonius có bán kính $R = \\dfrac{k}{|k^2-1|} \\cdot HK = \\dfrac{5/4}{25/16-1} \\cdot 2\\sqrt{3793} = \\dfrac{40\\sqrt{3793}}{9}$. Chu vi đường tròn quỹ tích đường ray tương ứng là $C = 2\\pi R \\approx 1720$ mét."
    },
    {
        q: "Nồng độ thuốc trong máu sau $t$ giờ kể từ khi tiêm được mô hình hóa bởi công thức $C(t) = C_0 \\cdot e^{-rt}$ (mg/lít). Biết rằng ngay sau khi tiêm, nồng độ thuốc là 15 mg/lít và sau đó 4 giờ nồng độ thuốc giảm còn 10 mg/lít. Để đạt hiệu quả điều trị, bác sĩ sẽ tiêm lại một liều mới khi nồng độ thuốc trong máu giảm xuống và còn ít nhất 6 mg/lít. Theo mô hình trên, khoảng thời gian nhiều nhất giữa hai lần tiêm thuốc là bao nhiêu giờ (kết quả làm tròn đến hàng đơn vị)?",
        answer: "9",
        explanation: "Ngay sau khi tiêm ứng với $t=0 \\Rightarrow C_0 = 15$. Tại mốc $t=4$ giờ, nồng độ còn 10 mg/lít nên ta có phương trình: $15 \\cdot e^{-4r} = 10 \\Leftrightarrow e^{-4r} = \\dfrac{2}{3} \\Rightarrow r = -\\dfrac{1}{4}\\ln\\left(\\dfrac{2}{3}\\right) \\approx 0,101366$. Liều tiêm tiếp theo cần thực hiện khi nồng độ chạm ngưỡng tối thiểu 6 mg/lít: $15 \\cdot e^{-rT} = 6 \\Leftrightarrow e^{-rT} = \\dfrac{2}{5} \\Rightarrow T = \\dfrac{\\ln(0,4)}{-r} = 4 \\cdot \\dfrac{\\ln(0,4)}{\\ln(2/3)} \\approx 9,039$ giờ. Làm tròn đến hàng đơn vị thu được kết quả bằng 9 giờ."
    },
    {
        q: "Có sáu tấm thẻ được đánh số từ 1 đến 6 ở mặt trước và số 0 ở mặt sau. Vị trí thứ $k$ hiển thị số tự nhiên $k$. Thí nghiệm gồm: gieo xúc xắc một lần, nếu xuất hiện mặt $k$ thì lật thẻ vị trí thứ $k$ một lần rồi đặt lại. Sau khi lặp lại thí nghiệm trên 3 lần, nếu biết tổng các số xuất hiện trên cả 6 thẻ là số chẵn, xác suất để số 1 xuất hiện đúng một lần khi gieo xúc xắc là $\\dfrac{a}{b}$ (với phân số tối giản). Tính giá trị của $a + b$.",
        image: "images/2612OnTNDe5/2612OnTNDe5TLN6.png",
        answer: "49",
        explanation: "Tổng số ban đầu trên 6 thẻ là $S_0 = 21$ (số lẻ). Khi lật thẻ chẵn, tính chẵn lẻ của tổng không đổi. Khi lật thẻ lẻ, tính chẵn lẻ của tổng bị đảo ngược. Để tổng cuối là số chẵn sau 3 lần lật, ta phải lật thẻ vị trí lẻ một số lẻ lần (1 lần hoặc 3 lần).\\n- Số phần tử không gian mẫu điều kiện biến cố $A$ (tổng chẵn): $n(A) = C_3^1 \\cdot 3^1 \\cdot 3^2$ (1 lẻ, 2 chẵn) $+ C_3^3 \\cdot 3^3 \\cdot 3^0$ (3 lẻ) $= 81 + 27 = 108$.\\n- Biến cố giao $A \\cap B$ (tổng chẵn VÀ mặt 1 xuất hiện đúng 1 lần): \\n+ TH1: Xuất hiện đúng 1 mặt lẻ và đó là mặt 1 (2 mặt còn lại chẵn) $\\Rightarrow C_3^1 \\cdot 1^1 \\cdot 3^2 = 27$.\\n+ TH2: Xuất hiện đúng 3 mặt lẻ, trong đó có đúng 1 mặt 1 (2 mặt còn lại thuộc lẻ khác {3,5}) $\\Rightarrow C_3^1 \\cdot 1^1 \\cdot 2^2 = 12$.\\nTổng số trường hợp thuận lợi $n(A \\cap B) = 27 + 12 = 39$. Xác suất điều kiện: $P = \\dfrac{39}{108} = \\dfrac{13}{36} \\Rightarrow a=13, b=36$. Tổng giá trị $a+b = 13+36 = 49$."
    }
];