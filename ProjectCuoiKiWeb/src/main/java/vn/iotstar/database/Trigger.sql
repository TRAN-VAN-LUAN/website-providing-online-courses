CREATE OR ALTER TRIGGER tr_themDangKy ON THANHTOAN
AFTER INSERT
AS
DECLARE @mand INT, @makh INT
SELECT @mand=i.MaNguoiDung, @makh=i.MaKhoaHoc
FROM inserted i
BEGIN
	INSERT INTO DANGKY VALUES(@mand, @makh)
END
GO