/*
  Warnings:

  - You are about to drop the `tb_test_post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tb_test_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tb_test_post` DROP FOREIGN KEY `tb_test_post_authorId_fkey`;

-- DropTable
DROP TABLE `tb_test_post`;

-- DropTable
DROP TABLE `tb_test_user`;
