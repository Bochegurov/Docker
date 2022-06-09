import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class HaloopEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  idOwner: string;
}
