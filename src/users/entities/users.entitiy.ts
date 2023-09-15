import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryColumn({ name: 'USERID', length: 12 })
    userid: string;

    @Column({ name: 'PASSWD', length: 12 })
    password: string

    @Column({ name: 'USERNAME', length: 30 })
    username: string

    @Column({ name: 'EMAIL', length: 320, nullable: true })
    email: string

    @CreateDateColumn({ name: 'INDATE', nullable: true })
    indate: Date | null;;


}